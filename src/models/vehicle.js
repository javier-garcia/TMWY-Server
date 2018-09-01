import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  driver_name: {
    type: String,
    required: true,
  },
  driver_email: String,
  start_point: String,
  start_datetime: String,
  free_seats: Number,
  comments: String,
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passenger' }],
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

export default Vehicle;
