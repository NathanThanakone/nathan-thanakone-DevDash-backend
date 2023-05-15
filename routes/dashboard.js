const express = require('express');
const axios = require('axios');
const fs = require('node:fs');
const router = express.Router();
const API_KEY = process.env.API_KEY;

const URL = 'https://wakatime.com/api/v1/'
const codingActivity_URL = 'https://wakatime.com/share/@384bee01-d4f3-4943-8eeb-e225e0a39109/549dc94e-2ca7-4cae-8476-4e59d22a7f1c.json'
const languages_URL = 'https://wakatime.com/share/@384bee01-d4f3-4943-8eeb-e225e0a39109/78fff58b-17c5-4377-a444-5ac7b100c395.json'


router.get('/projects', (req, res) => {
    axios
        .get(`${URL}users/current/projects${API_KEY}`)
        .then(response => {
            res.json(response.data);
        })
})

// parent data array inside response holds all data = response.data.data
router.get('/codingactivity', (req, res) => {
    axios
        .get(`${codingActivity_URL}`)
        .then(response => {
            res.json(response.data.data);
        })
})

router.get('/codinglanguages', (req, res) => {
    axios
        .get(`${languages_URL}`)
        .then(response => {
            res.json(response.data.data);
        })
})

module.exports = router;