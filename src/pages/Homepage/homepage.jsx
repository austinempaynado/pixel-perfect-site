import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PostCard } from "../../components/PostCard/postcard";
import PostContext from "../../context/postsContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useForm } from "react-hook-form";
import "./homepage.css";

export const Homepage = () => {
  //states
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //constants
  const history = useHistory();
  const globalState = useContext(PostContext);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getPosts();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/pixelperfect-00001/databases/(default)/documents/posts/"
      );
      const data = await response.json();

      const formattedData = data.documents.reverse().map((item) => {
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
      <div id="home-header">
        <h1>Home</h1>
      </div>
      <div id="post-input">
      </div>
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
