const express = require('express')
const articleControl= require('../controllers/articleControl')

const router = express.Router()

// this is our get method
// this method fetches all available data in our database
router.get('/getArticles', articleControl.getArticles)

router.get('/:id', articleControl.getSingleArticle)

// this is our create methid
// this method adds new data in our database
router.post('/', articleControl.createArticle)

// this is our update method
// this method overwrites existing data in our database
router.patch('/:id', articleControl.updateArticle)

// this is our delete method
// this method removes existing data in our database
router.delete('/:id', articleControl.deleteArticle)

module.exports = router
