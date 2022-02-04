import React from "react";
import "./postdetails.css";

export default function PostDetails() {
  return (
    <div className="postdetails">
      <img
        className="postImg"
        src="https://i.pinimg.com/originals/c0/47/9e/c0479e7b7008e723283032c3edc35444.jpg"
        alt=""
      />
      {/* <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div> */}

      <div className="postInfo">
        <div className="postInfoContainer">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>

        <span className="postDate">1 hour ago</span>

        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
      </div>
    </div>
  );
}
