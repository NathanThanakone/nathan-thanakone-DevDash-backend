const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const goalsRoute = require('./routes/goals');
const dashboardRoute = require('./routes/dashboard');
const tasksRoute = require('./routes/tasks');

app.use(cors());
app.use(express.json());

// route handlers for dashboard and goals routes
app.use('/dashboard', dashboardRoute);
app.use('/goals', goalsRoute);
app.use('/tasks', tasksRoute);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
})