  const listaTareas = [
    { id: 1, description: "Task 1", completed: false },
    { id: 2, description: "Task 2", completed: true },
    { id: 3, description: "Task 3", completed: false },
    { id: 4, description: "Task 4", completed: false },
  ];

  function createTask(nuevaTarea) {
    listaTareas.push(nuevaTarea)    
  }

function searchTasksForId(id) {
  return listaTareas.find((tarea) =>tarea.id === id)
}
function tasksListcompleted() {
  const completas = listaTareas.filter((tarea) => tarea.completed === true)
  if(completas.length === 0) {
    return 'no hay tareas completas, ponte las pilas'
  }
  const result = completas.map(
    (tarea) =>
    `tareas completadas ID ${tarea.id} y su descripcion ${tarea.description}`
  )
  return result
}
function tasksListIncompleted() {
  const incompletas = listaTareas.filter((tarea) => tarea.completed === false)
  if(incompletas.length === 0) {
    return 'no hay tareas incompletas, vas bien'
  }
  const result = incompletas.map(
    (tarea) =>
    `tareas incompletas ID ${tarea.id} y su descripcion ${tarea.description}`
  )
  return result
}

function removeTask (tareaId){
  let nuevaTarea = listaTareas.filter((tarea) => tarea.id === tareaId)
  listaTareas = nuevaTarea 
}

function updteTask (id, nuevaTarea) {
  const index = listaTareas.findIndex((listaTareas) => listaTareas.id === id)
  if(index === -1) {
    listaTareas[index] = { ...listaTareas[index], ...nuevaTarea}
    return `tarea actualizada: ${listaTareas[index]}`
  }else{
    return `no se encontro la tarea con id: ${id}, intenta nuevamente`
  }
}

function printTask(){
  return listaTareas
}

function esTareaValida(tarea) {
  return tarea && tarea.descripcion && typeof tarea.completado === "boolean";
}

function validarTareaMiddleware(req, res, next) {
  const tarea = req.body;

  if (!tarea) {
    return res.status(400).json({ error: "Cuerpo de la solicitud vacío" });
  }

  if (!esTareaValida(tarea)) {
    return res
      .status(400)
      .json({ error: "Información de tarea no válida o faltante" });
  }

  next();
}
function validarMetodoHTTP(req, res, next) {
  const metodo = req.method;

  const metodosValidos = ["GET", "POST", "PUT", "DELETE"];

  if (!metodosValidos.includes(metodo)) {
    return res.status(405).json({ error: "Método HTTP no válido" });
  }

  next();
}

function validarParametrosMiddleware(req, res, next) {
  const parametro = req.params.parametro;

  if (parametro === "completas" || parametro === "incompletas") {
    next();
  } else {
    res.status(400).json({ error: "Parámetro no válido" });
  }
}


module.exports={
  createTask,
  printTask,
  removeTask,
  searchTasksForId,
  tasksListcompleted,
  updteTask,
  tasksListIncompleted,
  validarTareaMiddleware,
  validarParametrosMiddleware
}