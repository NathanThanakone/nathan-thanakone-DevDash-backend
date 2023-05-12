const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const goalsRoute = require('./routes/goals');

app.use(cors());
app.use(express.json());

app.use('/goals', goalsRoute);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
})