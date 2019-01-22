const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardeners', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Plot = db.define('plots', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
  },
  plantedOn: {
    type: Sequelize.DATE,
  },
});

//associations
Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

Gardener.belongsTo(Vegetable, { as: 'favorite_vegetable' });

module.exports = {
  db,
  Gardener,
  Plot,
  Vegetable,
};
