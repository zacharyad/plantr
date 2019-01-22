const { db, Gardener, Plot, Vegetable } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced.');
  })
  .then(() =>
    Vegetable.create({
      name: 'Carrot',
      color: 'Orange',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Potato',
      color: 'Brown',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Radish',
      color: 'red',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Artichoke',
      color: 'green',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Eggplant',
      color: 'purple',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Green Bean',
      color: 'green',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Snap Pea',
      color: 'green',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Broccoli',
      color: 'green',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Kale',
      color: 'green',
    })
  )
  .then(() =>
    Vegetable.create({
      name: 'Cauliflower',
      color: 'white',
    })
  )
  .catch(error => {
    console.log('Disater! Something went wrong!');
    console.error(error);
    db.close();
  });
