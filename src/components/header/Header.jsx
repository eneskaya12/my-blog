import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">my</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80" alt=""/>
    </div>
  )
}
