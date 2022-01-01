
import {Link} from "react-router-dom";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CopyrightIcon from '@mui/icons-material/Copyright';

function StartPage() {
  return (
    <div className="startPage_container">
      <div className="startPage_navbar">
        <div className="startPage_logo">
          <div className="header_logo">
            ShowMovi
            <MovieCreationIcon />
          </div>
        </div>

        <div className="languae_btn btn">English</div>
        <Link to="/login">
          <div className="signin_btn btn">Sign IN</div>
        </Link>
      </div>
      <div className="hero_text_container_background">
        <div className="hero_text_container">
          <div className="hero_title">Unlimited movies, TV shows and more.</div>
          <div className="hero_subtitle">Watch anywhere. Cancel anytime.</div>
          <div className="smalltext">
            Ready to watch? Click on Login. Enter your username and password.
          </div>
          {/* <div className="email_containr">
          
          <input className="email_input_container" type="email" name="email" placeholder="Enter your email"/>
          <input className="email_submite_btn btn" type="submit" value="Get Started >" />
          </div> */}
          <Link to="/login">
            <div className="email_submite_btn btn">Login</div>
          </Link>
          <div className="copyrights">
            
            <CopyrightIcon/> 2021 Abhishek Raut.
        
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
