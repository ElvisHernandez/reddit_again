'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    image: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
  };
  return Favorite;
};