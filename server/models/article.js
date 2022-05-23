const mongoose = require('mongoose')
const Schema = mongoose.Schema

// this will be our data base's data structure
const articleSchema = new Schema({
  title: String,
  subtitle: String,
  author: String,
  content: String,
  tag: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
})

// export the new Schema so we could modify it using Node.js
const Article = mongoose.model('Article', articleSchema)

module.exports= Article
