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

module.exports={
  createTask,
  printTask,
  removeTask,
  searchTasksForId,
  tasksListcompleted,
  updteTask,
  tasksListIncompleted
}