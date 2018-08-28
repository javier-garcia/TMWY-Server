import express from 'express';
import passengerController from './passengerController';

const passengerRouter = express.Router();

passengerRouter
  .route('/')
  .get(passengerController.getAll)
  .post(passengerController.createOne);

passengerRouter.param('id', passengerController.findByParam);

passengerRouter
  .route('/:id')
  .get(passengerController.getOne)
  .put(passengerController.updateOne)
  .delete(passengerController.deleteOne);

export default passengerRouter;
