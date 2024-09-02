import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  //fetching: false,
  addPost: () => {},
  //addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  console.log("currPostList", currPostList);
  console.log("action", action);
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    console.log("ADD_POST", action.payload);
    newPostList = [action.payload.posts, ...currPostList];
    console.log("newPostList", newPostList);
    console.log("currPostList", currPostList);
    console.log("action payload", action.payload);
    console.log("action payload posts", action.payload.posts);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    //DEFAULT_POST_LIST
    []
  );

  //const [fetching, setFetching] = useState(false);

  // const addPost = (userId, postTitle, postBody, reactions, tags) => {
  const addPost = (posts) => {
    console.log("addPost", posts);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        // id: Date.now(),
        // title: postTitle,
        // body: postBody,
        // reactions: reactions,
        // userId: userId,
        // tags: tags,
        posts,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  // const deletePost = (postId) => {
  //   dispatchPostList({
  //     type: "DELETE_POST",
  //     payload: {
  //       postId,
  //     },
  //   });
  // };
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );
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
  //       console.log("on useEffect", data);
  //     });
  //   console.log("fetch end");
  //   return () => {
  //     console.log("clean up");
  //     //controller.abort();
  //   };
  // }, []);

  return (
    <PostList.Provider
      value={{
        postList,
        //fetching,
        addPost, //addInitialPosts,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho bhai",
//     body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default PostListProvider;
