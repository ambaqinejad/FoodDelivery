const sequelize = require("../utils/database/dbInitialization");
const Sequelize = require("sequelize");

const commonProperties = {
  type: Sequelize.STRING,
  allowNull: false,
};

const Restaurant = sequelize.define("restaurant", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: commonProperties,
  email: {
    ...commonProperties,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  address: commonProperties,
  delivery: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  phone: commonProperties,
  password: {
    ...commonProperties,
    validate: {
      len: [6, 12],
    },
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  latitude: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: -90,
      max: 90,
    },
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    validate: {
      min: -180,
      max: 180,
    },
  },
  description: Sequelize.STRING,
  image: Sequelize.STRING,
});

// Restaurant.beforeCreate((restaurant) => {});
