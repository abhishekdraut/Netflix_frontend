import {Link } from 'react-router-dom'
function SignUp() {
    return (
      
      <div className="startPage_container">
        <div className="startPage_navbar">
          <div className="startPage_logo"><img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="logo"
              /></div>
          
          <div className="languae_btn btn">English</div>
          <Link to="/login"><div className="signin_btn btn">Sign in</div></Link>
        </div>
        <div className="hero_text_container_background">
        
  
        </div>
        <div className="Tv_gif_container">
  
        </div>
        
      </div>
    );
  }
  
  export default SignUp;