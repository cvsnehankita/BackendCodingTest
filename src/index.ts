import express from "express";
import cors from "cors";
import router from "./components/PostController";


const app = express();
const port = 3000;

app.get('/posts', router);

app.patch('/posts/:id', express.json(), router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});