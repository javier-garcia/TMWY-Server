import Passenger from '../../models/passenger';
import Vehicle from '../../models/vehicle';

const allPassengers = () => Passenger.find({}).exec();

const newPassenger = async (_, { input }) => {
  const newPassenger = await Passenger.create(input);

  if (input.vehicle_id) {
    const vehicle = await Vehicle.findById(input.vehicle_id);

    const passengers = vehicle.passengers.concat([newPassenger._id]);

    await Vehicle.updateOne({ _id: input.vehicle_id }, { passengers });
  }

  return newPassenger;
};

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
