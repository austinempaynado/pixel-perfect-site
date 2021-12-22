import React, { useState } from "react";

const PostContext = React.createContext({
  posts: [],
  initializePosts: () => {},
});

export const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const initializePosts = (postsAPI) => {
    setPosts(postsAPI);
  };

  return (
    <PostContext.Provider
      value={{
        posts: posts,
        initializePosts: initializePosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
