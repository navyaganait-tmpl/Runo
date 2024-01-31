const express = require('express');
const authorController = require('../controllers/author');

const router = express.Router();

router.get('/author/:authorName', authorController.getTopicsByAuthor);

module.exports = router;