const express = require('express');
const categoryController = require('../controllers/category');

const router = express.Router();

router.get('/category',categoryController.getAllCategories);

router.get('/category/:categoryName', categoryController.getTopicsByCategory);
module.exports = router;