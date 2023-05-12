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

function getGoals() {
    const goalsFile = fs.readFileSync("./data/goals.json");
    const goals = JSON.parse(goalsFile);
    return goals;
}

module.exports = router;