const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    res.status(401).json({ error: 'authentication required' });
  }
  req.user = jwt.verify(token, process.env.TOKEN_SECRET);
  next();
}

module.exports = authorizationMiddleware;
