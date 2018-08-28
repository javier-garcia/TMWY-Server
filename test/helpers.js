/* import '../src/api/resources/user/user.model'
import '../src/api/resources/playlist/playlist.model'
import '../src/api/resources/song/song.model' */
import mongoose from 'mongoose';
import config from '../src/config';

mongoose.Promise = global.Promise;

export const removeModel = modelName => {
  const model = mongoose.model(modelName);
  return new Promise((resolve, reject) => {
    if (!model) {
      return resolve();
    }
    model.deleteMany({}, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });

    return resolve();
  });
};

export const dropDb = () =>
  mongoose
    .connect(
      config.db.url,
      { useNewUrlParser: true }
    )
    .then(() => Promise.all(mongoose.modelNames().map(removeModel)));
