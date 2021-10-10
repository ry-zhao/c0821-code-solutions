const Express = require('express');

const app = Express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server now listening...');
});
