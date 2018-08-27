const createOne = model => (req, res, next) =>
  model
    .create(req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const updateOne = model => async (req, res, next) =>
  model
    .updateOne(req.docFromId, req.body)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const deleteOne = model => (req, res, next) =>
  model
    .deleteOne(req.docFromId)
    .then(doc => res.status(201).json(doc))
    .catch(error => next(error));

const getOne = () => (req, res) => {
  // model
  //   .populate(req.docFromId, 'vehicles')
  //   .then(doc => res.status(200).json(doc))
  //   .catch(error => next(error));
  res.status(200).json(req.docFromId);
};

const getAll = model => (req, res, next) => {
  model
    .find()
    // .populate('vehicles')
    .then(docs => res.status(200).json(docs))
    .catch(error => next(error));
};

const findByParam = model => (req, res, next, id) => {
  model
    .findById(id)
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

const generateControllers = model => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model),
  };

  return defaults;
};

export default generateControllers;
