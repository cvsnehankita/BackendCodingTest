import express from 'express';
import postRouter from './components/PostController';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });
app.use('/post', postRouter);

export default app;