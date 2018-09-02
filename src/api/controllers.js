export const controllers = {
  createOne(model, data) {
    return model.create(data);
  },

  updateOne(model, docToUpdate, data) {
    const updatedDoc = Object.assign(docToUpdate, data);
    return updatedDoc.save();
  },

  deleteOne(model, docToDelete) {
    return model.deleteOne(docToDelete);
  },

  getOne(model, options, docToGet) {
    if (options !== 'undefined' && options.fieldsToBePopulated !== 'undefined') {
      return model.populate(docToGet, options.fieldsToBePopulated);
    }

    return Promise.resolve(docToGet);
  },

  getAll(model, options) {
    return new Promise((resolve, reject) => {
      model
        .find()
        .then(docs => {
          if (options && options.fieldsToBePopulated !== 'undefined') {
            model.populate(docs, options.fieldsToBePopulated).then(populatedDocs => {
              resolve(populatedDocs);
            });
          }

          resolve(docs);
        })
        .catch(error => reject(error));
    });
  },

  findById(model, id) {
    return model.findById(id);
  },
};

const createOne = model => (req, res, next) =>
  controllers
    .createOne(model, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const updateOne = model => async (req, res, next) =>
  controllers
    .updateOne(model, req.docFromId, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const deleteOne = model => (req, res, next) =>
  controllers
    .deleteOne(model, req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const getOne = (model, options) => (req, res, next) => {
  if (options && options.fieldsToBePopulated !== 'undefined') {
    controllers
      .getOne(model, req.docFromId, options)
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(error => next(error));
  } else {
    res.status(200).json(req.docFromId);
  }
};

const getAll = (model, options) => (req, res, next) => {
  const promise = controllers.getAll(model, options);
  promise
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(error => next(error));
};

const findById = model => (req, res, next, id) => {
  controllers
    .findById(model, id)
    .then(doc => {
      if (!doc) {
        next(new Error('Not Found Error'));
      } else {
        req.docFromId = doc;
        next();
      }
    })
    .catch(error => {
      next(error);
    });
};

const generateControllers = (model, options) => {
  const defaults = {
    findByParam: findById(model),
    getAll: getAll(model, options),
    getOne: getOne(model, options),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
  };

  return defaults;
};

export default generateControllers;
