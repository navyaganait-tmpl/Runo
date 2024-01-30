const {DataTypes, BelongsTo}= require("sequelize");
module.exports=(sequelize,DataTypes)=>{
    const author_category =sequelize.define("author_category",{
        author_categoryId:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            auto_increment:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
        }
       
    })
    author_category.associate = function (models) {
        models.author_category.belongsToMany(models.author, { through:"authorauthorcategory" });
      };
    return author_category;

}