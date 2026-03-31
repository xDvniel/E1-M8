const express = require("express");
const router = express.Router();
const controller = require("../controllers/tareaController");

router.get("/tareas", controller.obtenerTareas);
router.get("/tareas/:id", controller.obtenerTarea);
router.post("/tareas", controller.crearTarea);
router.put("/tareas/:id", controller.actualizarTarea);
router.delete("/tareas/:id", controller.eliminarTarea);

module.exports = router;