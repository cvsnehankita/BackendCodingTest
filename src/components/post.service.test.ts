import PostService from "./post.service";
import { Post } from "./Post";
import { describe, it, expect, beforeEach } from 'vitest';

describe('PostService', () => {
    // For Add a post and compair it with the getPosts method
    it('should add a post', () => {
        const service = new PostService();
        const newPost: Post = { id: 1, title: 'Test Post', content: 'This is a test post', likes: 0 };
        service.addPost(newPost);
        expect(service.getPosts()).toContainEqual(newPost);
    }
    );
    // For getPosts method to return all posts
    it('should return all posts', () => {
        const service = new PostService();
        const post1: Post = { id: 1, title: 'Post 1', content: 'Content 1', likes: 0 };
        const post2: Post = { id: 2, title: 'Post 2', content: 'Content 2', likes: 0 };
        service.addPost(post1);
        service.addPost(post2);
        expect(service.getPosts()).toEqual([post1, post2]);
    }
    );
    // For empty Post it shoul return empty array
    it('should return an empty array when no posts are added', () => {
        const service = new PostService();
        expect(service.getPosts()).toEqual([]);
    }
    );
    // For update likes in a post
    it('should update a post', () => {  
        const service = new PostService();
        const post: Post = { id: 1, title: 'Post to Update', content: 'Content to Update', likes: 0 };
        service.addPost(post);
        const updatedPost: Post = { id: 1, title: 'Updated Post', content: 'Updated Content', likes: 10 };
        service.updatePost(1, updatedPost);
        expect(service.getPosts()).toContainEqual({ ...post, ...updatedPost });
    }
    );
});