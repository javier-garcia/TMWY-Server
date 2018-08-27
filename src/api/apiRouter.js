import express from 'express';
import eventRouter from './eventRouter';
import vehicleRouter from './vehicleRouter';

const apiRouter = express.Router();

apiRouter.use('/event', eventRouter);
apiRouter.use('/vehicle', vehicleRouter);

export default apiRouter;
