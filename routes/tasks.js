const express = require('express');
const fs = require('node:fs');
const { v4 } = require('uuid');
const router = express.Router();

// get list of all goals in goals.json file
router.get('/', (req, res) => {
    const tasks = getTasks();
    res.json(tasks);
})

// adds new goal to goals.json file
router.post('/', (req, res) => {
    const tasks = getTasks();
    const { task } = req.body;

    const newTask = {
        id: v4(),
        task
    }

    tasks.push(newTask);
    fs.writeFileSync("./data/tasks.json", JSON.stringify(tasks));
    res.send('New Task added');
})

// delete goal from goals.json. Find index of object with matching goal from req.body and remove using splice, then update array
// router.delete('/', (req, res) => {
//     const goals = getGoals();
//     const { goal } = req.body;

//     const deleteGoal = goals.findIndex(item => item.goal === goal);
//     goals.splice(deleteGoal, 1);
//     fs.writeFileSync("./data/goals.json", JSON.stringify(goals)); 
//     res.send('Goal has been removed');
// })

// function to read data from goals.json file
function getTasks() {
    const tasksFile = fs.readFileSync("./data/tasks.json");
    const tasks = JSON.parse(tasksFile);
    return tasks;
}

function deleteGoal() {

}

module.exports = router;