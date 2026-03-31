const path = require("path");
const fs = require("fs");

exports.subirAvatar = (req, res) => {

  if (!req.files || !req.files.avatar) {
    return res.status(400).json({
      mensaje: "No se envió ningún archivo"
    });
  }

  const avatar = req.files.avatar;
  const userId = req.params.userId;

  const extension = avatar.name.split(".").pop().toLowerCase();

  const extensionesPermitidas = ["png", "jpg", "jpeg", "gif"];

  if (!extensionesPermitidas.includes(extension)) {
    return res.status(400).json({
      mensaje: "Extensión no permitida"
    });
  }

  const nombreArchivo = `${userId}.${extension}`;
  const rutaDestino = path.join(
    __dirname,
    "../uploads/avatars",
    nombreArchivo
  );

  avatar.mv(rutaDestino, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        mensaje: "Error al guardar el archivo"
      });
    }

    res.json({
      mensaje: "Avatar subido exitosamente",
      archivo: nombreArchivo
    });
  });
};