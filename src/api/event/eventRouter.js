import express from 'express';
import eventController from './eventController';

const eventRouter = express.Router();

eventRouter
  .route('/')
  .get(eventController.getAll)
  .post(eventController.createOne);

eventRouter.param('id', eventController.findByParam);

eventRouter
  .route('/:id')
  .get(eventController.getOne)
  .put(eventController.updateOne)
  .delete(eventController.deleteOne);

export default eventRouter;
