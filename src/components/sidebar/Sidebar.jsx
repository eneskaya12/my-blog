/* import axios from "axios"; */
import { useContext, /* useEffect, */ /* useState */ } from "react";
/* import { Link } from "react-router-dom"; */
import { AuthContext } from "../../context/auth/AuthContext";
import "./sidebar.css";

export default function Sidebar() {
  /* const [cats, setCats] = useState([]); */
  const { user } = useContext(AuthContext);
  const PF = "http://localhost:8800/images/";

  /* useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []); */

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={user.profilePicture ? PF + user.profilePicture : PF + "noAvatar.png"}
          alt=""
        />
        <p>
          {user.desc}
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div> */}
    </div>
  );
}
