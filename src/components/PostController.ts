import express from 'express';
import PostService from './post.service';

const router = express.Router();
const service = new PostService();
router.get('/', (req,res) => {
    res.json(service.getPosts());
});

router.post('/', (req,res) =>{
    const newPost = req.body;
    const addNewPost = service.addPost(newPost);
    res.status(201).json(newPost);
});

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPost = req.body;
    service.updatePost(id, updatedPost);
    res.status(200).json({ message: 'Post updated successfully' });
});

export default router;