import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  // const userIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const reactionsElement = useRef();
  // const tagsElement = useRef();

  //const handleSubmit = (event) => {
  // event.preventDefault();
  // const userId = userIdElement.current.value;
  // const postTitle = postTitleElement.current.value;
  // const postBody = postBodyElement.current.value;
  // const reactions = reactionsElement.current.value;
  // const tags = tagsElement.current.value.split(" ");
  // console.log("createPost", userId, postTitle, postBody, reactions, tags);
  // userIdElement.current.value = "";
  // postTitleElement.current.value = "";
  // postBodyElement.current.value = "";
  // reactionsElement.current.value = "";
  // tagsElement.current.value = "";
  // fetch("https://dummyjson.com/posts/add", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     title: postTitle,
  //     body: postBody,
  //     reactions: reactions,
  //     userId: userId,
  //     tags: tags,
  //   }),
  // })
  //   .then((res) => res.json())
  //   //.then(console.log);
  //   .then((post) => {
  //     console.log("from createPost", post);
  //     addPost(post);
  //     //addPost(userId, postTitle, postBody, reactions, tags);
  //     navigate("/");
  //   });
  //};

  return (
    // <form className="create-post" onSubmit={handleSubmit}>
    <Form className="create-post" method="post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          //ref={userIdElement}
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          //ref={postTitleElement}
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          //ref={postBodyElement}
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          //ref={reactionsElement}
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          //ref={tagsElement}
          name="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
    //</form>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log("postData", postData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      //{
      // title: postTitle,
      // body: postBody,
      // reactions: reactions,
      // userId: userId,
      // tags: tags,
      //}
      postData
    ),
  })
    .then((res) => res.json())
    //.then(console.log);
    .then((post) => {
      console.log("from createPost", post);
      //addPost(post);
      //addPost(userId, postTitle, postBody, reactions, tags);
      //navigate("/");
    });

  return redirect("/");
}
export default CreatePost;
