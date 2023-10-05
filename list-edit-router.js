// list-edit-router.js
const express = require("express");
const router = express.Router();
const tasksedits = require("./task");

// Ruta para crear una tarea
router.post("/crear", (req, res) => {
tasksedits.createTask(req.body)
res.json({
  status: 200,
  message:"se creo la tarea",
  data: req.body
})
});

// Ruta para eliminar una tarea
router.delete("/eliminar/:id", (req, res) => {
  const idEliminaTask = parseInt(req.params.id)
const tareaExiste = tasksedits.searchTasksForId(id)
  if (!tareaExiste) {
    res.status(400).json(`tarea no encontrada`)
  }else{
    tasksedits.removeTask(id)
    res.status(200).json(`tarea ${idEliminaTask} ha sido eliminada`)
  }
});

// Ruta para actualizar una tarea
router.put("/update:id", (req, res) => {
  const idOfUpdatedTask = parseInt(req.params.id)
  const taskToUpdated = tasksedits.searchTasksForId(id)
  if (!taskToUpdated){
    res.status(400).json('tarea no encontrada')
  }else{
    tasksedits.updteTask(id, req.body)
    res.status(200).json(`la tarea con id ${req.params.id} fue editada con exito`)
  }
});

module.exports = router;
