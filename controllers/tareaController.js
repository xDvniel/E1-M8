const Tarea = require("../models/tarea");

exports.obtenerTareas = async (req, res) => {
  const tareas = await Tarea.findAll();
  res.json(tareas);
};

exports.obtenerTarea = async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  res.json(tarea);
};

exports.crearTarea = async (req, res) => {
  const nueva = await Tarea.create(req.body);
  res.json(nueva);
};

exports.actualizarTarea = async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  await tarea.update(req.body);
  res.json(tarea);
};

exports.eliminarTarea = async (req, res) => {
  const tarea = await Tarea.findByPk(req.params.id);
  await tarea.destroy();
  res.json({ mensaje: "Tarea eliminada" });
};