import Event from '../../models/event';

const allEvents = async () => Event.find({}).exec();

const newEvent = (_, { input }) => Event.create(input);

// eslint-disable-next-line arrow-body-style
const updateEvent = (_, { input }) => {
  // const { id, ...update } = input; <-- Not soported

  return Event.findOneAndUpdate({ _id: input.id }, input, { new: true }).exec();
};

const deleteEvent = (_, { input }) => Event.findByIdAndRemove({ _id: input.id });

const eventResolvers = {
  Query: {
    allEvents,
  },

  Mutation: {
    newEvent,
    updateEvent,
    deleteEvent,
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
