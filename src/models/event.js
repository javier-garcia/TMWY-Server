import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admin_name: String,
  admin_email: String,
  datetime: Date,
  place: String,
  place_coords: String,
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vehicle' }],
});

const Event = mongoose.model('event', eventSchema);

export default Event;
