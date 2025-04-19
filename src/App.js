import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostLists from "./PostLists";
import Post from "./Post";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/">Trang chủ</Link> | <Link to="/posts">Bài viết</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Chào mừng đến blog</h2>} />
        <Route path="/posts" element={<PostLists />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
}
