import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  event_id: String,
  driver_name: {
    type: String,
    required: true,
  },
  driver_email: String,
  start_point: String,
  start_datetime: String,
  free_seats: Number,
  comments: String,
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;
