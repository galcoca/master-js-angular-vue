'use strict'

const express = require('express');
const ArticleController = require('../controllers/article');

const router = express.Router();

const multipart = require('connect-multiparty');
const mdUpload = multipart({uploadDir: './uploads/articles'});

router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles);
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.updateArticle);
router.delete('/article/:id', ArticleController.deleteArticle);
router.post('/uploadimage/:id?', mdUpload, ArticleController.uploadImage);
router.get('/image/:image', ArticleController.getImage);
router.get('/search/:search', ArticleController.search);

module.exports = router;