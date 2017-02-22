/* jshint -W119, -W104 */

import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import restaurantCtrl from '../controllers/restaurant';

let router = express();

// connect to db
initializeDb((db) => {

  // internal middleware
  router.use(middleware({ config, db }));

  // api routes v1 (/v1)
  router.use('/restaurant', restaurantCtrl({ config, db }));

});

export default router;
