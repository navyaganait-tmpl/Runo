const Sequelize = require('sequelize');
const db = require('../database/models');

module.exports={
    
  gettopics: async (req, res) => {
    try {

      const topics = await db.topic.findAll({
        include: [{ model: db.author,
          through: {
            model: db.authorauthorcategory,
          }, include: [
            {
              model: db.author_category,
              attributes: ['title'], // Include relevant fields from author_category
            },
          ],},{
          model: db.category,
        }],
        limit: 8,
      });

      return res.status(200).json(topics);
    } catch (error) {
      console.error('Error fetching topic:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getTopicById: async (req, res) => {
    try {
      const topicId = req.params.id;

      const topic = await db.topic.findByPk(topicId, {
        include: [{ model: db.author,
          through: {
            model: db.authorauthorcategory,
          }, include: [
            {
              model: db.author_category,
              attributes: ['title'], // Include relevant fields from author_category
            },
          ], },{
          model: db.category,
        }],
      });

      if (!topic) {
        return res.status(404).json({ error: 'Topic not found' });
      }

      return res.status(200).json(topic);
    } catch (error) {
      console.error('Error fetching topic by ID:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getPopularTopics: async (req, res) => {
    try {

      const topics = await db.topic.findAll({
        include: [{ model: db.author,
          through: {
            model: db.authorauthorcategory,
          }, include: [
            {
              model: db.author_category,
              attributes: ['title'], // Include relevant fields from author_category
            },
          ], },{
          model: db.category,
        }],
        limit:8,
        order: [['rating', 'DESC']],
      });

      return res.status(200).json(topics);
    } catch (error) {
      console.error('Error fetching topic:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getSearchedTopic: async (req, res) => {
    try {
      const searchTerm = String(req.params.searchTerm); 

    //   Find blogs where title or content is similar to the search term
      const topics = await db.topic.findAll({
        include: [{ model: db.author ,
          through: {
            model: db.authorauthorcategory,
          }, include: [
            {
              model: db.author_category,
              attributes: ['title'], // Include relevant fields from author_category
            },
          ],},{
          model: db.category,
        }],
        where: {
            [db.Sequelize.Op.or]: [
              { title: { [db.Sequelize.Op.iLike]: `%${searchTerm}%` } },
              { description: { [db.Sequelize.Op.iLike]: `%${searchTerm}%` } },
            ],
          },
      });

      return res.status(200).json(topics);
    } catch (error) {
      console.error('Error fetching similar blogs:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  },
}