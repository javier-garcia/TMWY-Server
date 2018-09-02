import Passenger from '../../models/passenger';

const allPassengers = () => Passenger.find({}).exec();

const newPassenger = (_, { input }) => Passenger.create(input);

// eslint-disable-next-line arrow-body-style
const updatePassenger = (_, { input }) => {
  // const { id, ...update } = input; <-- Not soported

  return Passenger.findOneAndUpdate({ _id: input.id }, input, { new: true }).exec();
};

const deletePassenger = (_, { input }) => Passenger.findByIdAndRemove({ _id: input.id });

const passengerResolvers = {
  Query: {
    allPassengers,
  },
  Mutation: {
    newPassenger,
    updatePassenger,
    deletePassenger,
  },
};

export default passengerResolvers;
