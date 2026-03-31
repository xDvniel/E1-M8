const express = require("express");
const fileUpload = require("express-fileupload");
const sequelize = require("./database");

const tareaRoutes = require("./routes/tareaRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(fileUpload());

app.use(tareaRoutes);
app.use(uploadRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});