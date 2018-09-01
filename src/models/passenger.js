import mongoose from 'mongoose';

const passengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
});

const Passenger = mongoose.model('passenger', passengerSchema);

export default Passenger;
