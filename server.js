const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const BlogPosts = [
  {
    slug: "first-blog-post",
    title: "First Blog Post",
    description: "This is the first blog post."
  },
  {
    slug: "second-blog-post",
    title: "Second Blog Post",
    description: "This is the second blog post."
  }
];

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/api/posts", (req, res) => {
  res.json(BlogPosts);
});

app.get("/api/post/:slug", (req, res) => {
  const post = BlogPosts.find(p => p.slug === req.params.slug);
  post ? res.json(post) : res.status(404).send("Not found");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
