const Sequelize = require('sequelize');
const db = require('../database/models');

module.exports = {

  getAllCategories: async (req, res) => {
    try {
      console.log("here");
      const categories = await db.category.findAll({ attributes: ['title'] });

      const categoryNames = categories.map(category => category.title);

      return res.status(200).json(categoryNames);
    } catch (error) {
      console.error('Error fetching categories:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getTopicsByCategory: async (req, res) => {
    try {
      const categoryName = req.params.categoryName;


      const topics = await db.topic.findAll({
        include: [{
          model: db.author,
          through: {
            model: db.authorauthorcategory,
          }, include: [
            {
              model: db.author_category,
              attributes: ['title'], // Include relevant fields from author_category
            },
          ],
        },
        {
          model: db.category,
          where: {
            title: categoryName,
          },
        },
        ],
        limit: 8,
        order: [['rating', 'DESC']],
      });
      // console.log(blogs[0]);
      return res.status(200).json(topics);
    } catch (error) {
      console.error('Error fetching topic by category:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },


}