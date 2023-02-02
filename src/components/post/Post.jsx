import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="data:image/png;base64,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"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum sit amet</span>
        <hr />
        <span className="postDate">1 haour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        varius gravida tellus ac sollicitudin. Pellentesque blandit massa id
        venenatis aliquam. Sed iaculis egestas ipsum in faucibus.
      </p>
    </div>
  );
}
