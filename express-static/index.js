const Express = require('express');
const path = require('path');

const server = new Express();

const absolutePath = path.join(__dirname, 'public');
console.log(absolutePath);

server.use(Express.static(absolutePath));

server.listen(3000, () => {
  console.log('Express server now listening on PORT 3000...');
});
