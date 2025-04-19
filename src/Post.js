import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/post/${slug}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [slug]);

  if (!post) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: 10 }}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </div>
  );
}
