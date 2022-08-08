const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const path = require('path');
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
