const express = require("express");
const sequelize = require("./database");
const tareaRoutes = require("./routes/tareaRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(tareaRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});