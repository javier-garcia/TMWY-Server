import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  driver_name: {
    type: String,
    required: true,
  },
  event_id: String,
  driver_email: String,
  start_location: String,
  start_coordinates: String,
  start_datetime: Number,
  free_seats: Number,
  comments: String,
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passenger' }],
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;
