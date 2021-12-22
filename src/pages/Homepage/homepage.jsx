import { PostCard } from "../../components/PostCard/postcard";
import "./homepage.css";

export const Homepage = (props) => {
  const { name, post, image } = props;
  return (
    <div id="posts-list">
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />{" "}
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />{" "}
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />{" "}
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />{" "}
      <PostCard
        post="Welcome to pixel perfect, the art sharing platform!"
        name="Austin"
      />
    </div>
  );
};
