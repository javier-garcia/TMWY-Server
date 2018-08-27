import express from 'express';
import Vehicle from '../models/vehicle';

const vehicleRouter = express.Router();

vehicleRouter.route('/').get(() => {
  Vehicle.create({
    event_id: '5b82ee7705a79c72a1e6ba3e',
    driver_name: 'Javi',
    driver_email: '',
    start_point: 'My place',
    start_datetime: '',
    free_seats: 4,
    comments: '',
  });
});

export default vehicleRouter;
