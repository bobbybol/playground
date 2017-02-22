/* jshint -W119, -W104 */

import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../models/restaurant';

const restaurantCtrl = (obj) => {
  const config  = obj.config;
  const db      = obj.db;

  let api = Router();

  // CRUD - Create Read Update Delete

  // '/v1/restaurant/add' - Create a restaurant
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save((err) => {
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' });
    });
  });

  // '/v1/restaurant' - Read all restaurants
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if(err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  // '/v1/restaurant/:id' - Read one restaurant
  api.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if(err) {
        res.send(err);
      }
      res.json(restaurant);
    });
  });

  // '/v1/restaurant/:id' - Update one restaurant
  api.put('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if(err) {
        res.send(err);
      }
      restaurant.name = req.body.name;
      restaurant.save(err => {
        if(err) {
          res.send(err);
        }
        res.json({ message: "Restaurant info updated "});
      });
    });
  });

  // 'v1/restaurant/:id' - Delete one restaurant
  api.delete('/:id', (req, res) => {
    Restaurant.remove({ _id: req.params.id }, (err, restaurant) => {
      if(err) {
        res.send(err);
      }
      res.json({ message: "Restaurant Deleted" });
    });
  });

  return api;
};

export default restaurantCtrl;
