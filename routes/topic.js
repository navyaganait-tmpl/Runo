const express = require('express');
const router = express.Router();

const topicController = require('../controllers/topic');


router.get('/topic',topicController.gettopics);

router.get('/topic/:id', topicController.getTopicById);

router.get('/popular-topic',topicController.getPopularTopics);

router.get('/:searchTerm', topicController.getSearchedTopic);

module.exports = router;