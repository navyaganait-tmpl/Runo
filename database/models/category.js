const {DataTypes, BelongsTo}= require("sequelize");
module.exports=(sequelize,DataTypes)=>{
    const category =sequelize.define("category",{
        categoryId:{
            primaryKey:true,
            type:DataTypes.INTEGER,
            auto_increment:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false,
        }
       
    })
    category.associate = function (models) {
        models.category.belongsToMany(models.topic, { through:"topiccategory" });
      };
    return category;

}