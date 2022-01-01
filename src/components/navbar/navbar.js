import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Link,useNavigate} from "react-router-dom";
import UserContext from "../../store/userContext";
import {useContext} from "react";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
function Navbar() {
  const [toggleMore, setToggleMore] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const {user,setUser}=useContext(UserContext);
  const navigate=useNavigate()


  function toggleState() {
   
  
    if (toggleMore) {
      setToggleMore(false);
    } else {
      setToggleMore(true);
    }
  }
  function logout() {
    setUser(null)
    navigate("/login")
    
  }
  function toggelNavbar() {
    
    if (navbar) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
 
  return (
    <>
      <div className="navbar_container_backgound">
        <div className="navbar_container">
          <div className="navitem">
          <div className="header_logo">ShowMovi<MovieCreationIcon/></div>
          </div>
          <div className="hamburger" onClick={toggelNavbar}>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
          <div className={`togglenavbar ${navbar ? "" : "showNav"}`}>
            <div className="navitem item">
            <Link to="/home">
             HomePage</Link>
            </div>
            <div className="navitem item">
            <Link to="/movies">
             Movies</Link>
            </div>
            <div className="navitem item">
            <Link to="/series">
             Series</Link>
            </div>
            <div className="navitem item">
            <Link to="/trending">
             Trending and Popular</Link>
            </div>
            <div className="navitem item">
              My list
            </div>
            <div className="navitem item">
              <Link to="/categories">
              <div className="Categories" ><div >Categories</div> <KeyboardArrowDownIcon /> 
              
              
              </div>
              </Link>
              
              
              
              
            </div>
            <div className="navitem item search">
              <SearchIcon/>
            </div>
            <div className="navitem item">
              Kid
            </div>
            
            <div className="navitem item">
              Profile
            </div>
            
            <div className="navitem item">
              <div className={`navitm item more`} onClick={toggleState}>
                
                <KeyboardArrowDownIcon/>
                <div
                  className={`navitm_options item${toggleMore ? "" : " show"}`}
                >
                  <div className="options item">
                    <a href=""></a>Settings
                  </div>
                  <div className="options item">
                    <a href=""></a>Account
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="navitem item logout-btn" onClick={logout}>
              Logout
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Navbar;
