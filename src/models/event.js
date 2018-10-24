import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  admin_name: String,
  admin_email: String,
  datetime: Number,
  place: String,
  place_coords: String,
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' }],
  passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passenger' }],
});

const Event = mongoose.model('event', eventSchema);

export default Event;
