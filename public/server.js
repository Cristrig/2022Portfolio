const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server running on localhost:${PORT}`);
});
