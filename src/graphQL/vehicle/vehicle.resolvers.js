import Vehicle from '../../models/vehicle';

const allVehicles = () => Vehicle.find({}).exec();

const newVehicle = (_, { input }) => Vehicle.create(input);

// eslint-disable-next-line arrow-body-style
const updateVehicle = async (_, { input }) => {
  // const { id, ...update } = input; <-- Not soported

  return Vehicle.findOneAndUpdate({ _id: input.id }, input, { new: true }).exec();
};

const deleteVehicle = (_, { input }) => Vehicle.findByIdAndRemove({ _id: input.id });

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
