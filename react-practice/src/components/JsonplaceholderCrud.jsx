import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonplaceholderCrud = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state

  // Separate validation states for Add and Edit
  const [addPostErrors, setAddPostErrors] = useState({ title: "", body: "" });
  const [editPostErrors, setEditPostErrors] = useState({ title: "", body: "" });

  // Fetch posts from API
  const fetchPosts = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Validate post inputs for Add form
  const validateAddPost = () => {
    const errors = { title: "", body: "" };
    let isValid = true;

    if (!newPost.title.trim()) {
      errors.title = "Title is required.";
      isValid = false;
    }
    if (!newPost.body.trim()) {
      errors.body = "Body is required.";
      isValid = false;
    }

    setAddPostErrors(errors);
    return isValid;
  };

  // Validate post inputs for Edit form
  const validateEditPost = () => {
    const errors = { title: "", body: "" };
    let isValid = true;

    if (!editPost.title.trim()) {
      errors.title = "Title is required.";
      isValid = false;
    }
    if (!editPost.body.trim()) {
      errors.body = "Body is required.";
      isValid = false;
    }

    setEditPostErrors(errors);
    return isValid;
  };

  // Handle change for Add Post
  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });

    // Inline validation
    validateAddPost();
  };

  // Handle change for Edit Post
  const handleEditPostChange = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });

    // Inline validation
    validateEditPost();
  };

  // Create a new post
  const handleAddPost = async () => {
    if (!validateAddPost()) return; // Validate Add Post form

    setLoading(true); // Start loader
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
      setAddPostErrors({ title: "", body: "" }); // Clear errors after successful submission
    } catch (error) {
      console.error("Error adding post:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Edit a post
  const handleEditPost = async (id) => {
    if (!validateEditPost()) return; // Validate Edit Post form

    setLoading(true); // Start loader
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        editPost
      );
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditPost(null); // Close edit form
      setEditPostErrors({ title: "", body: "" }); // Clear errors after successful submission
    } catch (error) {
      console.error("Error editing post:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    setLoading(true); // Start loader
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  return (
    <div>
      <h1>Posts List</h1>

      {/* Loader */}
      {loading && <p>Loading...</p>}

      {/* Add New Post */}
      <div>
        <h2>Add Post</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleNewPostChange}
        />
        {/* Title error message for Add */}
        {addPostErrors.title && (
          <p style={{ color: "red" }}>{addPostErrors.title}</p>
        )}

        <input
          type="text"
          name="body"
          placeholder="Body"
          value={newPost.body}
          onChange={handleNewPostChange}
        />
        {/* Body error message for Add */}
        {addPostErrors.body && (
          <p style={{ color: "red" }}>{addPostErrors.body}</p>
        )}

        <button onClick={handleAddPost} disabled={loading}>
          Add Post
        </button>
      </div>

      {/* Edit Post */}
      {editPost && (
        <div>
          <h2>Edit Post</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={editPost.title}
            onChange={handleEditPostChange}
          />
          {/* Title error message for Edit */}
          {editPostErrors.title && (
            <p style={{ color: "red" }}>{editPostErrors.title}</p>
          )}

          <input
            type="text"
            name="body"
            placeholder="Body"
            value={editPost.body}
            onChange={handleEditPostChange}
          />
          {/* Body error message for Edit */}
          {editPostErrors.body && (
            <p style={{ color: "red" }}>{editPostErrors.body}</p>
          )}

          <button
            onClick={() => handleEditPost(editPost.id)}
            disabled={loading}>
            Save Edit
          </button>
        </div>
      )}

      {/* Posts Listing */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {/* Hide Edit button when this post is being edited */}
            {editPost && editPost.id === post.id ? null : (
              <button onClick={() => setEditPost(post)} disabled={loading}>
                Edit
              </button>
            )}
            <button
              onClick={() => handleDeletePost(post.id)}
              disabled={loading}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonplaceholderCrud;
