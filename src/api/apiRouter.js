import express from 'express';
import eventRouter from './event/eventRouter';
import vehicleRouter from './vehicle/vehicleRouter';
import passengerRouter from './passenger/passengerRouter';

const apiRouter = express.Router();

apiRouter.use('/event', eventRouter);
apiRouter.use('/vehicle', vehicleRouter);
apiRouter.use('/passenger', passengerRouter);

export default apiRouter;
