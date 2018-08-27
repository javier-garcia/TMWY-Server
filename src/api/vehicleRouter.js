import express from 'express';
import Vehicle from '../models/vehicle';

const vehicleRouter = express.Router();

vehicleRouter.route('/').get((req, res, next) => {
  Vehicle.find()
    .populate('vehicles')
    .exec()
    .then(docs => res.status(201).json(docs))
    .catch(error => next(error));
});

export default vehicleRouter;
