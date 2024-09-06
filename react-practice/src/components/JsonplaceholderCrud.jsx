import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonplaceholderCrud = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPost, setEditPost] = useState(null);

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Create a new post
  const handleAddPost = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Edit a post
  const handleEditPost = async (id) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        editPost
      );
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditPost(null); // Close edit form
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  return (
    <div>
      <h1>Posts List</h1>

      {/* Add New Post */}
      <div>
        <h2>Add Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>

      {/* Edit Post */}
      {editPost && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            placeholder="Title"
            value={editPost.title}
            onChange={(e) =>
              setEditPost({ ...editPost, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Body"
            value={editPost.body}
            onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
          />
          <button onClick={() => handleEditPost(editPost.id)}>Save Edit</button>
        </div>
      )}

      {/* Posts Listing */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => setEditPost(post)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonplaceholderCrud;
