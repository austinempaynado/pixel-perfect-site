import "./profilepage.css";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react/cjs/react.development";
import { useState } from "react";
import { useContext } from "react";
import PostContext from "../../context/postsContext";
import { PostCard } from "../../components/PostCard/postcard";

export const ProfilePage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const globalState = useContext(PostContext);
  const email = getAuth().currentUser.email;

  useEffect(() => {
    getPosts();
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

      const filteredPosts = formattedData.filter(
        (posts) => posts.name.stringValue === email
      );
      setPosts(filteredPosts);
      globalState.initializePosts(formattedData);
    } catch (err) {}
  };

  const createId = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const submitPost = async (formVals) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const formattedData = {
      fields: {
        post: { stringValue: formVals.post },
        name: { stringValue: user.email },
        id: { stringValue: createId(10) },
      },
    };
    try {
      const response = await fetch(
        "https://firestore.googleapis.com/v1/projects/pixelperfect-00001/databases/(default)/documents/posts/",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(formattedData),
        }
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="profile-page">
      <div id="profile-header">
        <h1 id="profile-title">Signed in as {email}</h1>
      </div>
      <div id="profile-contents">
        <form id="post-form" onSubmit={handleSubmit(submitPost)}>
          <br />
          <input
            id="post-input"
            placeholder="Create a new post!"
            {...register("post")}
            name="post"
            required
            type="text"
          />
          <input id="post-submit" type="submit" values="Submit Post" />
        </form>

        {posts.map((post) => (
          <PostCard
            key={post.id.stringValue}
            id={post.id.stringValue}
            name={post.name.stringValue}
            post={post.post.stringValue}
          />
        ))}
      </div>
    </div>
  );
};
