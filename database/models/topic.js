const { DataTypes, BelongsTo } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const topic = sequelize.define("topic", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            auto_increment: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        headerimage: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        readtime:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull:false,
        }, 
        imageURL:{
            type: DataTypes.JSON,
            allowNull: false,
        }

    })

    topic.associate = function (models) {
        models.topic.belongsToMany(models.category, { through:"topiccategory"});
        models.topic.belongsToMany(models.author, { through:"topicauthor" });

    };
    return topic;
}
