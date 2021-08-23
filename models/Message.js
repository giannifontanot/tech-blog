const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {
}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {type: DataTypes.STRING},
        content: {type: DataTypes.STRING},
        //user_id: {type: DataTypes.INTEGER, allowNull: false},
        // user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: sequelize.models.User, key:"user_id"}},
    },
    {
        sequelize,
        modelName: 'Message',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
    }
);

module.exports = Message;