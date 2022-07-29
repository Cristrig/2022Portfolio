const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
