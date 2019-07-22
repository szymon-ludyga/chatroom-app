const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '..', 'public');

console.log(publicPath);

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.status(200).json({
//     elo: true
//   });
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listen on port: ' + port);
});
