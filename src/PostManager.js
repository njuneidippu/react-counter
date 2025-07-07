import React, { useState } from "react";
import { usePosts } from "../hooks/usePosts";

export default function PostManager() {
  const { posts, loading, addPost, updatePost, deletePost } = usePosts();
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const handleAdd = () => {
    addPost({ title: newTitle, body: newBody });
    setNewTitle("");
    setNewBody("");
  };

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => updatePost(post.id, { ...post, title: post.title + " (Updated)" })}>
              Update
            </button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        ))
      )}

      <h3>Add New Post</h3>
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      />
      <button onClick={handleAdd}>Add Post</button>
    </div>
  );
}
