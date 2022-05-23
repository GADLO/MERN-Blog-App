const Article = require('../models/article')

module.exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find()
    res.status(200).json(articles)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

module.exports.getSingleArticle = async (req, res) => {
  try {
    const { id: _id } = req.params
    const article = await Article.findById(_id)
    res.status(200).json(article)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
}

// this is our update method
// this method overwrites existing Article in our Articlebase
module.exports.updateArticle = async (req, res) => {
  const { id: _id } = req.params
  const article = req.body
  try {
    const updateArticle = await Post.findByIdAndUpdate(_id, article, {
      new: true
    })
    res.status(200).json(updateArticle)
  } catch (error) {
    res.status(409).json({
      message: error.message
    })
  }
}

// this is our delete method
// this method removes existing Article in our Articlebase
module.exports.deleteArticle = async (req, res) => {
  const { id: _id } = req.params
  try {
    const deletedArticle = await Article.findByIdAndRemove(_id)
    res.status(200).json(deletedArticle)
  } catch (error) {
    res.status(409).json({
      message: error.message
    })
  }
}

// this is our create method
// this method adds new Article in our Articlebase
module.exports.createArticle = async (req, res) => {
  const newArticle = new Article(req.body)
  try {
    await newArticle.save()
    res.status(201).json(newArticle)
  } catch (error) {
    res.status(409).json({
      message: error.message
    })
  }
}
