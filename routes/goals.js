const express = require('express');
const fs = require('node:fs');
const { v4 } = require('uuid');
const router = express.Router();

// get list of all goals in goals.json file
router.get('/', (req, res) => {
    const goals = getGoals();
    res.json(goals);
})

// adds new goal to goals.json file
router.post('/', (req, res) => {
    const goals = getGoals();
    const { goal } = req.body;

    const newGoal = {
        id: v4(),
        goal
    }

    goals.push(newGoal);
    fs.writeFileSync("./data/goals.json", JSON.stringify(goals));
    res.send('New Goal added');
})

// delete goal from goals.json. Find index of object with matching goal from req.body and remove using splice, then update array
router.delete('/', (req, res) => {
    const goals = getGoals();
    const { goal } = req.body;

    const deleteGoal = goals.findIndex(item => item.goal === goal);
    goals.splice(deleteGoal, 1);
    fs.writeFileSync("./data/goals.json", JSON.stringify(goals)); 
    res.send('Goal has been removed');
})

// function to read data from goals.json file
function getGoals() {
    const goalsFile = fs.readFileSync("./data/goals.json");
    const goals = JSON.parse(goalsFile);
    return goals;
}

function deleteGoal() {

}

module.exports = router;