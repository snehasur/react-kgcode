//onchange submit validation at a tym not work
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

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

  // Validate title and body inputs
  const validateTitleBody = (title, body) => {
    const errors = { title: "", body: "" };
    let isValid = true;

    if (title.length > 0 && title.length < 2) {
      errors.title = "Title must be at least 2 characters.";
      isValid = false;
    }
    if (body.length > 0 && body.length < 2) {
      errors.body = "Body must be at least 2 characters.";
      isValid = false;
    }

    return { errors, isValid };
  };

  // Handle change for Add Post
  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => {
      const updatedPost = { ...prevPost, [name]: value };
      const { errors } = validateTitleBody(updatedPost.title, updatedPost.body);
      setAddPostErrors(errors);
      return updatedPost;
    });
  };

  // Handle change for Edit Post
  const handleEditPostChange = (e) => {
    const { name, value } = e.target;
    setEditPost((prevPost) => {
      const updatedPost = { ...prevPost, [name]: value };
      const { errors } = validateTitleBody(updatedPost.title, updatedPost.body);
      setEditPostErrors(errors);
      return updatedPost;
    });
  };

  // Validate and create a new post
  const handleAddPost = async () => {
    const { errors, isValid } = validateTitleBody(newPost.title, newPost.body);
    if (!isValid) {
      setAddPostErrors(errors);
      return; // Prevent submission if validation fails
    }

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

  // Validate and edit a post
  const handleEditPost = async (id) => {
    const { errors, isValid } = validateTitleBody(
      editPost.title,
      editPost.body
    );
    if (!isValid) {
      setEditPostErrors(errors);
      return; // Prevent submission if validation fails
    }

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
    <div className="container my-4">
      <h1 className="text-center mb-4">Posts List</h1>

      {/* Loader */}
      {loading && <p>Loading...</p>}

      {/* Add New Post */}
      <div className="mb-4">
        <h2>Add Post</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            name="title"
            placeholder="Title"
            value={newPost.title}
            onChange={handleNewPostChange}
          />
          {addPostErrors.title && (
            <p className="text-danger">{addPostErrors.title}</p>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            name="body"
            placeholder="Body"
            value={newPost.body}
            onChange={handleNewPostChange}
          />
          {addPostErrors.body && (
            <p className="text-danger">{addPostErrors.body}</p>
          )}
        </div>
        <button
          className="btn btn-primary"
          onClick={handleAddPost}
          disabled={loading}
        >
          Add Post
        </button>
      </div>

      {/* Edit Post */}
      {editPost && (
        <div className="mb-4">
          <h2>Edit Post</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              name="title"
              placeholder="Title"
              value={editPost.title}
              onChange={handleEditPostChange}
            />
            {editPostErrors.title && (
              <p className="text-danger">{editPostErrors.title}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control mb-2"
              name="body"
              placeholder="Body"
              value={editPost.body}
              onChange={handleEditPostChange}
            />
            {editPostErrors.body && (
              <p className="text-danger">{editPostErrors.body}</p>
            )}
          </div>
          <button
            className="btn btn-success"
            onClick={() => handleEditPost(editPost.id)}
            disabled={loading}
          >
            Save Edit
          </button>
        </div>
      )}

      {/* Posts Listing */}
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  {editPost && editPost.id === post.id ? null : (
                    <button
                      className="btn btn-warning btn-sm mr-2"
                      onClick={() => setEditPost(post)}
                      disabled={loading}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeletePost(post.id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JsonplaceholderCrud;
