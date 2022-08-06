const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

const Post = require('./models/Post')

routes.get('/posts', async (req, res) => {
    const posts = await Post.find();
    return res.json(posts) 
})

routes.delete('/posts/:id' , async (req, res) => {
    const posts = await Post.findById(req.params.id)
    await posts.remove()
    return res.send()
})

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, key, location: url = ""} = req.file
    const post = await new Post({
        name,
        size,
        key,
        url
    })
    await post.save()
    return res.json(post)
    
})

module.exports = routes;