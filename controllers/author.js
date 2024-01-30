const Sequelize = require('sequelize');
const db = require('../database/models');

module.exports={
    getTopicsByAuthor: async (req, res) => {
        try {
          const authorName = req.params.authorName;
      
          
          const topics = await db.topic.findAll({
            include: [
                {
                  model: db.author,
                  where: {
                    name: authorName,
                  },
                },
                {
                  model: db.category,
                },
              ],
            limit:8,
          });
          // console.log(blogs[0]);
          return res.status(200).json(topics);
        } catch (error) {
          console.error('Error fetching topic by category:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      },
  

}