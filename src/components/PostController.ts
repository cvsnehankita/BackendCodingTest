import PostService from './PostService';
import express from 'express';

const router = express.Router();
const postService = new PostService();
router.get('/posts', (req, res) => {
    const posts = postService.getPosts();
    res.status(200).json(posts);
}
);

router.post('/posts', (req, res) => {
    const post = req.body;
    postService.addPost(post);
    res.status(201).json(post);
}
);

router.patch('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); //?
    const updatedPost = req.body;
    postService.updatePost(id, updatedPost);
    res.status(200).json({ message: 'Post updated successfully' });
}
);
export default router;
