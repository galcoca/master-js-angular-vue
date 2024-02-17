'use strict'

const validator = require('validator');
const fs = require('fs');
const path = require('path');

const Article = require('../models/article');
const { request } = require('http');

const controller = {
    save: (request, response) => {
        let params = request.body;

        try {
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        } catch(error) {
            return response.status(200).send({
                status: 'error',
                message: 'Missing Data'
            });
        }   
        
        if(validateTitle && validateContent) {
            let article = new Article();

            article.title = params.title;
            article.content = params.content;
            if (params.image) {
                article.image = params.image;
            } else {
                article.image = null;
            }

            article.save().then((articleStored) => {
                return response.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            })
            .catch(error => {
                return response.status(500).send({
                    status: error,
                    message: 'Unable to save the article'
                });
            });
        } else {
            return response.status(500).send({
                status: 'error',
                message: 'Data is not valid or incomplete'
            });
        }
    },

    getArticles: (request, response) => {
        let {last} = request.params;
        let query = Article.find({})

        if(last || last != undefined){
            query.limit(5);
        }

        query.sort('-_id').exec().then((articles) => {
            return response.status(200).send({
                status: 'success',
                articles: articles
            });
        })
        .catch(error => {
            return response.status(500).send({
                status: error,
                message: 'Unable to find articles'
            });
        });
    },

    getArticle: (request, response) => {
        let articleId = request.params.id;

        Article.findById(articleId).then((article)=>{
            return response.status(200).send({
                status: 'success',
                article: article
            });
        })
        .catch(error => {
            return response.status(500).send({
                status: error,
                message: "Unable to find the article"
            });
        });
    },

    updateArticle: (request, response) => {
        let articleId = request.params.id;

        let params = request.body;

        try {
            var validateTitle = !validator.isEmpty(params.title);
            var validateContent = !validator.isEmpty(params.content);
        } catch (error) {
            return response.status(500).send({
                status: 'error',
                message: "Missing Data"
            });
        }

        if(validateTitle && validateContent){
            Article.findOneAndUpdate({_id:articleId}, params, {new:true}).then((articleUpdated) => {
                return response.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            })
            .catch(error => {
                return response.status(500).send({
                    status: error,
                    message: "Unable to update the article"
                });
            });
        } else {
            return response.status(500).send({
                status: 'error',
                message: "Incorrect Validation"
            });
        }
    },

    deleteArticle: (request, response) => {
        let articleId = request.params.id;

        Article.findOneAndDelete({_id: articleId}).then((articleRemoved) => {

            if(!articleRemoved){
                return response.status(500).send({
                    status: 'error',
                    article: "Article already deleted or doesn't exist"
                });
            }

            let articleImage = articleRemoved.image;

            if(articleImage != undefined && articleImage != null){
                let pathFile = './uploads/articles/'+articleImage;
                fs.unlink(pathFile, (error) => {
                    if(error) {
                        return response.status(500).send({
                            status: error,
                            message: "Not valid image extension"
                        });
                    }
                });
            }

            return response.status(200).send({
                status: 'articleDeleted',
                article: articleRemoved
            });
        })
        .catch(error => {
            return response.status(500).send({
                status: error,
                message: "Unable to delete the article"
            });
        });
    },

    uploadImage: (request, response) => {
        let fileName = 'Unable to load image';

        if(!request.files)
        {
            return response.status(404).send({
                status: 'error',
                message: fileName
            });
        }

        let filePath = request.files.file0.path
        let fileSplit = filePath.split('\\');

        //For Linux
        //let fileSplit = filePath.split('/');

        fileName = fileSplit[2];
        let extensionSplit = fileName.split('\.');
        let fileExtension = extensionSplit[1];

        if (fileExtension != 'png' && fileExtension != 'jpg' && fileExtension != 'jpeg' && fileExtension != 'gif') {
            fs.unlink(filePath, (error) => {
                return response.status(500).send({
                    status: error,
                    message: "Not valid image extension"
                });
            });

        } else {
            let articleId = request.params.id;
            if(articleId){
                Article.findOneAndUpdate({_id: articleId}, {image: fileName}, {new:true}).then((articleUpdated) => {
                    return response.status(200).send({
                        status: 'success',
                        article: articleUpdated
                    });
                })
                .catch(error => {
                    return response.status(500).send({
                        status: error,
                        message: "Unable to update the article image"
                    });
                });
            } else {
                return response.status(200).send({
                    status: 'success',
                    image: fileName
                });
            }
        }

    },

    getImage: (request, response) => {
        let file = request.params.image
        let pathFile = './uploads/articles/'+file;

        if(fs.existsSync(pathFile)){
            return response.sendFile(path.resolve(pathFile));
        } else {
            return response.status(500).send({
                status: 'error',
                message: "Image doesn't exists"
            });
        }

    },

    search: (request, response) => {
        let searchString = request.params.search;

        Article.find({
            "$or":[
                { "title": { "$regex": searchString, "$options": "i" }},
                { "content": { "$regex": searchString, "$options": "i" }}
            ]
        })
        .sort([['date', 'descending']])
        .exec()
        .then((articles) => {

            if(!articles || articles.length <= 0){
                return response.status(404).send({
                    status: 'error',
                    message: 'Unable to find articles with that data'
                });
            } else {
                return response.status(200).send({
                    status: 'success',
                    articles: articles
                });
            }
        })
        .catch(error => {
            return response.status(500).send({
                status: error,
                message: 'Request Error'
            });
        });
    }
}

module.exports = controller;