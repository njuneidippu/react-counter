import { useState, useEffect } from "react";

const API_URL = "http://localhost:3001/posts";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //  Fetch posts using async/await
  const fetchPosts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // ➕ Add post using .then()
  const addPost = (newPost) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => setPosts((prev) => [...prev, data]))
      .catch((err) => console.error("Add error:", err));
  };

  // 🔄 Update post using async/await
  const updatePost = async (id, updatedPost) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });
      const data = await res.json();
      setPosts((prev) =>
        prev.map((post) => (post.id === id ? data : post))
      );
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  // ❌ Delete post using .then()
  const deletePost = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setPosts((prev) => prev.filter((post) => post.id !== id)))
      .catch((err) => console.error("Delete error:", err));
  };

  return { posts, loading, addPost, updatePost, deletePost };
}
