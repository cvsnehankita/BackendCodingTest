
import { Post } from "./Post";
export default class PostService {
    private posts: Post[] = [];
    private idCounter: number = 0;

    getPosts(): Post[] {
        return this.posts;
    }

    addPost(post: Post): void {
        //post.id = this.idCounter + 1;
        this.posts.push(post);
    }

    updatePost(id: number, updatedPost: Post): void {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
          //this.posts[index] = { ...this.posts[index], ...updatedPost };
          this.posts[index].likes = updatedPost.likes;
        }
    }

}