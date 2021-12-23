import "./postcard.css";

export const PostCard = (props) => {
  const { name, image, post } = props;
  return (
    <div id="post-container">
      <div id="post-wrapper">
        <h1 id="poster-name">{name}</h1>
        <p>{post}</p>
        <img src={image} />
      </div>
    </div>
  );
};
