import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
function NavbarForDetailsPage() {
  const [toggleMore, setToggleMore] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [categoryToggle, setcategoryToggle] = useState(false);

  function toggleState() {
    if (toggleMore) {
      setToggleMore(false);
    } else {
      setToggleMore(true);
    }
  }

  function toggelNavbar() {
    if (navbar) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  }
  function Togglecategory() {
    if (categoryToggle) {
      setcategoryToggle(false);
    } else {
      setcategoryToggle(true);
    }
  }
  return (
    <>
      <div className="navbar_container_backgound">
        <div className="navbar_container">
          <div className="navitem">
            <div className="header_logo">
              ShowMovi
              <MovieCreationIcon />
            </div>
          </div>
          <div className="hamburger" onClick={toggelNavbar}>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
          <div className={`togglenavbar ${navbar ? "" : "showNav"}`}>
            <div className="navitem item">
              <Link to="/home">Homepage</Link>
            </div>

            <div className="navitem item search">
              <SearchIcon />
            </div>

            <div className="navitem item">Profile</div>
            <div className="navitem item"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavbarForDetailsPage;
