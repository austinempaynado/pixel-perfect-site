import "./postcard.css";

export const PostCard = (props) => {
  const { name, image, post } = props;
  return (
    <div id="post-container">
      <div id="post-wrapper">
        <p id="poster-name">{name}</p>
        <p>{post}</p>
        <img src={image} />
      </div>
    </div>
  );
};
