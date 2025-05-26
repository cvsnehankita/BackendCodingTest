A simple RESTful API built with Node.js and Express to manage posts and their likes.

**simple blog application** where users can:

1. **View a list of blog posts**
2. **Create a new blog post**
3. **Like a blog post**

## Technologies Stack

1. **Node.js**: JavaScript runtime for building the server.
2. **Express.js**: Web framework for building APIs.
3. **TypeScript**: Superset of JavaScript for type safety.
4. **Editor**: Visual studio code
5. **Thunder Client**: Tools for API testing.

## Endpoints
- `GET /posts` → Fetch all blog posts
- `POST /posts` → Add a new blog post
- `PATCH /posts/:id/like` → Like a blog post

## Run Options
1. Run code in dev environment or local: npm run dev
2. Run test cases: npx vitest run