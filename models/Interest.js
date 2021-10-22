const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interest extends Model { }

Interest.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
            type: DataTypes.TEXT,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'interest',
    }
)
// >>>>>>> 2978ce0fe567b3ec691b91f28ff3ab4c0c55f2b0
module.exports = Interest;

