import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
  event_id: String,
  name: {
    type: String,
    required: true,
  },
  email: String,
  vehicle_id: String,
});

const Passenger = mongoose.model('passenger', passengerSchema);

export default Passenger;
