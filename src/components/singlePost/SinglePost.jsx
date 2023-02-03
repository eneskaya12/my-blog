import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://drscdn.500px.org/photo/84262239/m%3D900/v2?sig=23e277d7f86f7df6767b2b431840cfbba0aeefd5e70464ce914bf940a937ebc9"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Enes</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          viverra luctus viverra. Mauris posuere vitae velit in finibus. Nulla
          purus turpis, molestie sit amet eros non, placerat aliquam orci. Cras
          non ipsum vehicula, euismod velit ac, venenatis augue. Integer non
          vehicula quam. Vestibulum semper semper purus in cursus. Maecenas at
          massa non lacus volutpat tristique. Nunc vulputate ipsum ut bibendum
          ultrices. Donec eu mauris id eros consectetur faucibus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque viverra
          luctus viverra. Mauris posuere vitae velit in finibus. Nulla purus
          turpis, molestie sit amet eros non, placerat aliquam orci. Cras non
          ipsum vehicula, euismod velit ac, venenatis augue. Integer non
          vehicula quam. Vestibulum semper semper purus in cursus. Maecenas at
          massa non lacus volutpat tristique. Nunc vulputate ipsum ut bibendum
          ultrices. Donec eu mauris id eros consectetur faucibus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque viverra
          luctus viverra. Mauris posuere vitae velit in finibus. Nulla purus
          turpis, molestie sit amet eros non, placerat aliquam orci. Cras non
          ipsum vehicula, euismod velit ac, venenatis augue. Integer non
          vehicula quam. Vestibulum semper semper purus in cursus. Maecenas at
          massa non lacus volutpat tristique. Nunc vulputate ipsum ut bibendum
          ultrices. Donec eu mauris id eros consectetur faucibus.
        </p>
      </div>
    </div>
  );
}
