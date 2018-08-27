import express from 'express';
import Event from '../models/event';

const eventRouter = express.Router();

eventRouter
  .route('/')
  .get((req, res, next) => {
    Event.find()
      .populate('vehicles')
      .exec()
      .then(docs => res.status(201).json(docs))
      .catch(error => next(error));
  })
  .post((req, res, next) => {
    Event.create(req.body)
      .then(doc => res.status(201).json(doc))
      .catch(error => next(error));
  });

eventRouter.param('id', (req, res, next, id) => {
  Event.findById(id)
    .then(doc => {
      if (!doc) {
        next(new Error('Event not found'));
      } else {
        req.docFromId = doc;
        next();
      }
    })
    .catch(error => {
      next(error);
    });
});

eventRouter
  .route('/:id')
  .get((req, res, next) => {
    Event.populate(req.docFromId, 'vehicles')
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(error => {
        next(error);
      });
  })
  .put((req, res, next) => {
    Event.updateOne(req.docFromId, req.body)
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(error => {
        next(error);
      });
  })
  .delete((req, res, next) => {
    Event.deleteOne(req.docFromId)
      .then(doc => {
        res.status(201).json(doc);
      })
      .catch(error => {
        next(error);
      });
  });

export default eventRouter;
