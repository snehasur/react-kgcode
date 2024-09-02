import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  // const { postList, addInitialPosts } = useContext(PostListData);

  //const { postList, fetching } = useContext(PostListData);
  const postList = useLoaderData();
  console.log("postList", postList);
  // const [fetching, setFetching] = useState(false);
  // useEffect(() => {
  //   setFetching(true);
  //   console.log("fetch start");
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //       console.log("fetch return");
  //     });
  //   console.log("fetch end");
  //   return () => {
  //     console.log("clean up");
  //   };
  // }, []);
  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   console.log("fetch start");
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //       console.log("fetch return");
  //     });
  //   console.log("fetch end");
  //   return () => {
  //     console.log("clean up");
  //     controller.abort();
  //   };
  // }, []);
  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setDataFetched(true);
  //     });
  // }
  //const handelGetPostsClick = () => {
  // console.log("Get Posts Clicked");
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   //.then(console.log);
  //   .then((data) => {
  //     addInitialPosts(data.posts);
  //   });
  //};
  return (
    <>
      {/* {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomeMessage
        //onGetPostsClick={handelGetPostsClick}
        />
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)} */}
      {postList.length === 0 && (
        <WelcomeMessage
        //onGetPostsClick={handelGetPostsClick}
        />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      // addInitialPosts(data.posts);
      // setFetching(false);
      // console.log("fetch return");
      // console.log("on useEffect", data);
      console.log("data", data.posts);
      return data.posts;
    });
};

export default PostList;
