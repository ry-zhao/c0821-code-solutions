const Express = require('express');
const ex = new Express();

ex.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
