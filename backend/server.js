const express = require('express');

const app = express();

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`Backend running on port ${PORT}!`));