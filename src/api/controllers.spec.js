import { expect } from 'chai';
import { dropDb } from '../../test/helpers';
import { controllers } from './controllers';
import Event from '../models/event';

describe('Test Controllers', () => {
  beforeEach(async () => {
    await dropDb();
  });

  afterEach(async () => {
    await dropDb();
  });

  describe('controllers', () => {
    describe('createOne', () => {
      it('should create a document', async () => {
        const result = await controllers.createOne(Event, {
          name: 'My event',
          admin_name: 'Javi',
          admin_email: '',
          datetime: '',
          place: 'My place',
          place_coords: '',
          vehicles: ['5b8413afa07fff7dfb2d247d'],
        });
        expect(result).to.be.ok;
        expect(result.id).to.be.ok;
        expect(result.name).to.equal('My event');
      });
    });

    describe('updateOne', () => {
      it('should update a document', async () => {
        const docToUpdate = await controllers.createOne(Event, {
          name: 'My event',
          admin_name: 'Javi',
          admin_email: '',
          datetime: '',
          place: 'My place',
          place_coords: '',
          vehicles: ['5b8413afa07fff7dfb2d247d'],
        });

        const result = await controllers.updateOne(Event, docToUpdate, { name: 'New name' });
        expect(result).to.be.ok;
        expect(result._id).to.equal(docToUpdate._id);
        expect(result.name).to.equal('New name');
      });
    });

    describe('deleteOne', () => {
      it('should delete a document', async () => {
        const docToDelete = await controllers.createOne(Event, {
          name: 'My event',
          admin_name: 'Javi',
          admin_email: '',
          datetime: '',
          place: 'My place',
          place_coords: '',
          vehicles: ['5b8413afa07fff7dfb2d247d'],
        });

        await controllers.deleteOne(Event, docToDelete);

        expect(await Event.findById(docToDelete._id)).to.equal(null);
      });
    });
  });
});
