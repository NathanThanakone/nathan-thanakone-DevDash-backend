const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const dashboardRoute = require('./routes/dashboard');

app.use(cors());
app.use(express.json());

// route handlers for dashboard
app.use('/dashboard', dashboardRoute);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
})