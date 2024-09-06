import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonplaceholderCrudWithAbortController = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editPost, setEditPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch posts from API with AbortController
  const fetchPosts = async (signal) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { signal }
      );
      setPosts(response.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error fetching posts:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  // Create a new post
  const handleAddPost = async () => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost,
        { signal }
      );
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error adding post:", error);
      }
    }

    return () => {
      controller.abort();
    };
  };

  // Edit a post using PATCH instead of PUT
  const handleEditPost = async (id) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        editPost, // Only update the fields in editPost (partial update)
        { signal }
      );
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditPost(null);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error editing post:", error);
      }
    }

    return () => {
      controller.abort();
    };
  };

  // Delete a post
  const handleDeletePost = async (id) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        signal,
      });
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("Error deleting post:", error);
      }
    }

    return () => {
      controller.abort();
    };
  };

  // useEffect with AbortController
  useEffect(() => {
    const controller = new AbortController(); // Step 1: Create AbortController
    const signal = controller.signal;

    fetchPosts(signal); // Fetch posts with the signal

    // Step 2: Cleanup function to abort the request
    return () => {
      controller.abort(); // Abort when the component is unmounted or the effect is re-run
    };
  }, []);

  return (
    <div>
      <h1>Posts List</h1>

      {loading ? <p>Loading...</p> : null}

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

export default JsonplaceholderCrudWithAbortController;
