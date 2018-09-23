import Vehicle from '../../models/vehicle';
import Event from '../../models/event';

const allVehicles = () => Vehicle.find({}).exec();

const newVehicle = async (_, { input }) => {
  const event = await Event.findById(input.event_id);

  // TODO: Throw error if event wasn't found

  const newVehicle = await Vehicle.create(input);

  const vehicles = event.vehicles.concat([newVehicle._id]);
  await Event.updateOne({ _id: input.event_id }, { vehicles });

  return newVehicle;
};

// eslint-disable-next-line arrow-body-style
const updateVehicle = async (_, { input }) => {
  // const { id, ...update } = input; <-- Not soported

  return Vehicle.findOneAndUpdate({ _id: input.id }, input, { new: true }).exec();
};

const deleteVehicle = async (_, { input }) => {
  const vehicle = await Vehicle.findById(input.id);
  const event = await Event.findById(vehicle.event_id);

  const vehicles = event.vehicles.filter(vehicleId => vehicleId !== input.id);
  Event.updateOne({ _id: input.event_id }, { vehicles });

  await Vehicle.deleteOne(vehicle);

  return vehicle;
};

const vehicleResolvers = {
  Query: {
    allVehicles,
  },

  Mutation: {
    newVehicle,
    updateVehicle,
    deleteVehicle,
  },

  Vehicle: {
    async passengers(vehicle) {
      const populatedVehicle = await vehicle.populate('passengers').execPopulate();

      return populatedVehicle.passengers;
    },
  },
};

export default vehicleResolvers;
