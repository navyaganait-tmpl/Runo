
const express = require('express');
const categoryController = require('../controllers/category');

const router = express.Router();

router.get('/all',categoryController.getAllCategories);
router.get('/:categoryName', categoryController.getTopicsByCategory);

module.exports = router;