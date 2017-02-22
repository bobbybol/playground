/* jshint -W119, -W104 */

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

// The Express app
let app = express();

// The Express server
app.server = http.createServer(app);

// Middleware
// parse application/json
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// Passport config

// API routes v1
app.use('/v1', routes);

// Spin up the server
app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

// Export the app from this module
export default app;
