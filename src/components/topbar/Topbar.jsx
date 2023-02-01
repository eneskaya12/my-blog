import "./topbar.css"

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdUtb_N_bj04YdApVfv00WaakO8-c4t7HuA&usqp=CAU" alt=""/>
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
