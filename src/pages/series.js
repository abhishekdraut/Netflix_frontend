import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import NavbarForDetailsPage from "../components/navbar/navbarForDetailsPage";
import Navbar from "../components/navbar/navbar";
import UserContext from "../store/userContext";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";


function Series() {
  const [categoryWiseMovies, setcategoryWiseMovies] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
   

  const baseurl = `https://api.themoviedb.org/3/trending/tv/day?api_key=d6808d0ad50276bc5f432c356ac53f7a`;
  const baseImgurl = "https://image.tmdb.org/t/p/w300";
  

  useEffect(() => {
    if (user === null) {
        navigate("/login");
      }
    async function fetchDataCategoryWise() {
      const newArray = [];
      for (let index = 1; index <= 5; index++) {
        const response = await axios.get(`${baseurl}&page=${index}`);
        newArray.push(response.data.results);
      }

      if (newArray.length >= 0) {
        setcategoryWiseMovies(newArray.flat());
      }
    }
    fetchDataCategoryWise();
  }, [setcategoryWiseMovies]);

  return (
    <div className="OuterDiv">
      <Navbar/>

      <div className="categoryWise_Movie_container_background trending_page">
        <div className="simillar_title_category ">Series of the Week</div>

        <div className="categoryWise_Movie_container">
          {categoryWiseMovies.map((item) => {
            return (
              <div className="card" key={`${item.id}`}>
                <Link to={`/tvfulldetail/${item.id}`}>
                  <img
                    className="category_poster_img"
                    src={`${baseImgurl}${item.poster_path}`}
                    alt="poster"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Series;
