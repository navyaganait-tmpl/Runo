const { DataTypes, BelongsTo } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const author = sequelize.define("author", {
       
        authorId: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        authorProfile:{
            type:DataTypes.JSON,
            allowNull:false
        }
    })
    author.associate = function (models) {
        models.author.belongsToMany(models.topic, { through:"topicauthor" });
        models.author.belongsToMany(models.author_category, { through:"authorauthorcategory" });
    };

    return author;

}