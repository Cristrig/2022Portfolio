const express = require('express');
const app = express();
const path = require('node:path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
