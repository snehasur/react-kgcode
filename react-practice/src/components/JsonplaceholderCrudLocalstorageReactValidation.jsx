import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { useForm } from "react-hook-form";
import SuccessMessage from "./SuccessMessage";

const JsonplaceholderCrudLocalstorageReactValidation = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state
  const [message, setMessage] = useState(""); // Message state
  const [messageType, setMessageType] = useState("success"); // Message type state (success, danger)

  // Form state for Add Post
  const {
    register: registerAdd,
    handleSubmit: handleSubmitAdd,
    formState: { errors: addPostErrors, isSubmitted: isSubmittedAdd },
    reset: resetAddPostForm,
    trigger: triggerAddValidation,
  } = useForm();

  // Form state for Edit Post
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    formState: { errors: editPostErrors, isSubmitted: isSubmittedEdit },
    reset: resetEditPostForm,
    setValue: setEditValue,
    trigger: triggerEditValidation,
  } = useForm();

  // Fetch posts from API
  const fetchPosts = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  // Handle axios errors
  const handleAxiosError = (error) => {
    if (error.response) {
      setMessage(`Error ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      setMessage("No response from server. Please try again later.");
    } else {
      setMessage(`Error: ${error.message}`);
    }
    setMessageType("error");
  };

  // Add new post
  const onAddPostSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      setPosts([response.data, ...posts]);
      resetAddPostForm(); // Reset form after successful submission
      setMessage("Form submitted successfully!");
      setMessageType("success");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  // Edit existing post
  const onEditPostSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${editPost.id}`,
        data
      );
      setPosts(
        posts.map((post) => (post.id === editPost.id ? response.data : post))
      );
      setEditPost(null); // Reset edit state
      resetEditPostForm(); // Reset form after submission
      setMessage("Post updated successfully!");
      setMessageType("success");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  // Set the edit form fields when editing a post
  useEffect(() => {
    if (editPost) {
      setEditValue("title", editPost.title);
      setEditValue("body", editPost.body);
    }
  }, [editPost, setEditValue]);

  // Delete post
  const handleDeletePost = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      setMessage("Post deleted successfully!");
      setMessageType("danger");
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
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

        {loading && <p>Loading...</p>}

        {/* Add New Post Form */}
        <div className="mb-4">
          <h2>Add Post</h2>
          <form
            onSubmit={handleSubmitAdd(onAddPostSubmit)}
            onBlur={() => triggerAddValidation()}>
            <div className="form-group">
              <input
                type="text"
                className={`form-control mb-2 ${
                  addPostErrors.title
                    ? "is-invalid"
                    : isSubmittedAdd && "is-valid"
                }`}
                placeholder="Title"
                {...registerAdd("title", {
                  required: "Title is required",
                  minLength: {
                    value: 2,
                    message: "Title must be at least 2 characters long",
                  },
                })}
              />
              {addPostErrors.title && (
                <p className="text-danger">{addPostErrors.title.message}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`form-control mb-2 ${
                  addPostErrors.body
                    ? "is-invalid"
                    : isSubmittedAdd && "is-valid"
                }`}
                placeholder="Body"
                {...registerAdd("body", {
                  required: "Body is required",
                  minLength: {
                    value: 2,
                    message: "Body must be at least 2 characters long",
                  },
                })}
              />
              {addPostErrors.body && (
                <p className="text-danger">{addPostErrors.body.message}</p>
              )}
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={loading}>
              Add Post
            </button>
          </form>
        </div>

        {/* Edit Post Form */}
        {editPost && (
          <div className="mb-4">
            <h2>Edit Post</h2>
            <form
              onSubmit={handleSubmitEdit(onEditPostSubmit)}
              onBlur={() => triggerEditValidation()}>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control mb-2 ${
                    editPostErrors.title
                      ? "is-invalid"
                      : isSubmittedEdit && "is-valid"
                  }`}
                  placeholder="Title"
                  {...registerEdit("title", {
                    required: "Title is required",
                    minLength: {
                      value: 2,
                      message: "Title must be at least 2 characters long",
                    },
                  })}
                />
                {editPostErrors.title && (
                  <p className="text-danger">{editPostErrors.title.message}</p>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-control mb-2 ${
                    editPostErrors.body
                      ? "is-invalid"
                      : isSubmittedEdit && "is-valid"
                  }`}
                  placeholder="Body"
                  {...registerEdit("body", {
                    required: "Body is required",
                    minLength: {
                      value: 2,
                      message: "Body must be at least 2 characters long",
                    },
                  })}
                />
                {editPostErrors.body && (
                  <p className="text-danger">{editPostErrors.body.message}</p>
                )}
              </div>
              <button
                className="btn btn-success"
                type="submit"
                disabled={loading}>
                Save Edit
              </button>
            </form>
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

export default JsonplaceholderCrudLocalstorageReactValidation;
