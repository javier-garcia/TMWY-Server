import Vehicle from '../../models/vehicle';

const allVehicles = () => Vehicle.find({}).exec();

const vehicleResolvers = {
  Query: {
    allVehicles,
  },

  Vehicle: {
    async passengers(vehicle) {
      const populatedVehicle = await vehicle.populate('passengers').execPopulate();

      return populatedVehicle.passengers;
    },
  },
};

export default vehicleResolvers;
