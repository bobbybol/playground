/* jshint -W119, -W104 */

import mongoose from 'mongoose';
import config from './config';

 const initializeDb = (callback) => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
};

export default initializeDb;
