const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();

// middleware
app.use(express.json());
app.use(bodyParser)

const app = express();

