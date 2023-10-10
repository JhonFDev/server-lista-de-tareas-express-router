const express = require("express");
const router = express.Router();
const tasksviews = require("./task");


router.get("/", (req, res) => {
  res.json(tasksviews.printTask());
});

router.get("/buscar/:id", (req,res) =>{
  const id = parseInt(req.params.id)
  res.json(tasksviews.searchTasksForId(id))
})



router.get("/incompletas", tasksviews.validarParametrosMiddleware, (req, res) => {
   res.json(tasksviews.tasksListIncompleted());
});

router.get("/completas", tasksviews.validarParametrosMiddleware, (req, res) => {
   res.json(tasksviews.tasksListcompleted());
});

module.exports = router;
