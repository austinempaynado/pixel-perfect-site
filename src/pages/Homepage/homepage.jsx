import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard } from "../../components/PostCard/postcard";
import PostContext from "../../context/postsContext";
import "./homepage.css";

export const Homepage = (props) => {
  //states
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //constants
  const history = useHistory();
  const globalState = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/pixelperfect-00001/databases/(default)/documents/posts/"
      );
      const data = await response.json();

      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      setPosts(formattedData);
      setLoading(false);
      globalState.initializePosts(formattedData);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div id="home-container">
      <h1>Home</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <PostCard
            key={post.id.stringValue}
            id={post.id.stringValue}
            name={post.name.stringValue}
            post={post.post.stringValue}
          />
        ))}
      </div>
      {loading && (
        <div id="ring=container">
          <div className="loading-ring"></div>
        </div>
      )}
    </div>
  );
};
