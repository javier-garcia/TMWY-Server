import express from 'express';
import vehicleController from './vehicleController';

const vehicleRouter = express.Router();

vehicleRouter
  .route('/')
  .get(vehicleController.getAll)
  .post(vehicleController.createOne);

vehicleRouter.param('id', vehicleController.findByParam);

vehicleRouter
  .route('/:id')
  .get(vehicleController.getOne)
  .put(vehicleController.updateOne)
  .delete(vehicleController.deleteOne);

export default vehicleRouter;
