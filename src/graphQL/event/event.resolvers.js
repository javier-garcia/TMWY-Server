import Event from '../../models/event';

const allEvents = async () => Event.find({}).exec();

const eventResolvers = {
  Query: {
    allEvents,
  },

  Event: {
    async vehicles(event) {
      const populatedEvent = await event.populate('vehicles').execPopulate();

      return populatedEvent.vehicles;
    },

    async passengers(event) {
      const populatedEvent = await event.populate('passengers').execPopulate();

      return populatedEvent.passengers;
    },
  },
};

export default eventResolvers;
