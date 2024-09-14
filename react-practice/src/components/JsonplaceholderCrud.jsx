//onchange submit validation at a tym not work
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import SuccessMessage from "./SuccessMessage";

const JsonplaceholderCrud = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state

  // Separate validation states for Add and Edit
  const [addPostErrors, setAddPostErrors] = useState({ title: "", body: "" });
  const [editPostErrors, setEditPostErrors] = useState({ title: "", body: "" });
  const [message, setMessage] = useState(""); // Message state
  const [messageType, setMessageType] = useState("success"); // Message type state (success, danger)

  // Fetch posts from API
  const fetchPosts = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error fetching post:", error);

      // Check if Axios has returned a response or if it's a network error
      if (error.response) {
        // The request was made and the server responded with a status code outside 2xx range
        setMessage(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made, but no response was received
        setMessage("No response from server. Please try again later.");
      } else {
        // Something happened while setting up the request
        setMessage(`Error: ${error.message}`);
      }

      setMessageType("error");
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
      setMessage("Form submitted successfully!");
      setMessageType("success");
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error adding post:", error);

      // Check if Axios has returned a response or if it's a network error
      if (error.response) {
        // The request was made and the server responded with a status code outside 2xx range
        setMessage(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made, but no response was received
        setMessage("No response from server. Please try again later.");
      } else {
        // Something happened while setting up the request
        setMessage(`Error: ${error.message}`);
      }

      setMessageType("error");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Validate and edit a post
  const handleEditPost = async (id) => {
    // Validate the input fields before sending the request
    const { errors, isValid } = validateTitleBody(
      editPost.title,
      editPost.body
    );

    // If validation fails, set error state and prevent submission
    if (!isValid) {
      setEditPostErrors(errors);
      return;
    }

    setLoading(true); // Start the loader while the request is being made

    try {
      // Sending the PUT request to update the post
      console.log(editPost);
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        editPost
      );

      // Check if the response data is valid
      if (response && response.data) {
        // Update the post in the state
        setPosts(posts.map((post) => (post.id === id ? response.data : post)));

        // Close the edit form and clear previous errors
        setEditPost(null);
        setEditPostErrors({ title: "", body: "" });

        // Display success message
        setMessage("Entry updated successfully!");
        setMessageType("success");
      } else {
        // Handle invalid response data scenario
        setMessage("Failed to update entry. Invalid response from server.");
        setMessageType("error");
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error editing post:", error);

      // Check if Axios has returned a response or if it's a network error
      if (error.response) {
        // The request was made and the server responded with a status code outside 2xx range
        setMessage(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made, but no response was received
        setMessage("No response from server. Please try again later.");
      } else {
        // Something happened while setting up the request
        setMessage(`Error: ${error.message}`);
      }

      setMessageType("error");
    } finally {
      // Stop the loader regardless of success or failure
      setLoading(false);
    }
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    setLoading(true); // Start loader
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      setMessage("Entry deleted successfully!");
      setMessageType("danger");
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Error delete post:", error);

      // Check if Axios has returned a response or if it's a network error
      if (error.response) {
        // The request was made and the server responded with a status code outside 2xx range
        setMessage(`Error ${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // The request was made, but no response was received
        setMessage("No response from server. Please try again later.");
      } else {
        // Something happened while setting up the request
        setMessage(`Error: ${error.message}`);
      }

      setMessageType("error");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  const handleCloseMessage = () => {
    setMessage("");
  };

  return (
    <>
      <SuccessMessage
        message={message}
        type={messageType}
        onClose={handleCloseMessage}
      />
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
            disabled={loading}>
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
              disabled={loading}>
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
                        disabled={loading}>
                        Edit
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeletePost(post.id)}
                      disabled={loading}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default JsonplaceholderCrud;
