import Passenger from '../../models/passenger';

const allPassengers = () => Passenger.find({}).exec();

const passengerResolvers = {
  Query: {
    allPassengers,
  },
};

export default passengerResolvers;
