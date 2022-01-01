import { Link } from "react-router-dom";
import requests from "../../request";
import axios from "axios";
import { useState, useEffect } from "react";
import CategoryHero from "../Hero/categoryHeroTv";
import NavbarForDetailsPage from "../navbar/navbarForDetailsPage";

function CategoryWiseTv({ category_id }) {
  const [categoryWiseTv, setcategoryWiseTv] = useState([]);
  const baseurl = `https://api.themoviedb.org/3/discover/tv?api_key=d6808d0ad50276bc5f432c356ac53f7a&page=1&with_genres=`;
  const baseImgurl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function fetchDataCategoryWise(params) {
      const newArray=[]
      for (let index = 1; index <= 5; index++) {
        const response = await axios.get(`${baseurl}${category_id}&page=${index}`);
        newArray.push(response.data.results)

      }
      
      
      if (newArray.length>=0) {
        setcategoryWiseTv(newArray.flat());
      }
    }
    fetchDataCategoryWise();
  }, [setcategoryWiseTv]);
  
  return (
    <div className="OuterDiv">
      <NavbarForDetailsPage/>
    <CategoryHero cat_id={category_id} />
    <div className="categoryWise_Movie_container_background">
      <div className="simillar_title_category">
        More like This.
      </div>
      
    <div className="categoryWise_Movie_container">
      {categoryWiseTv.map((item) => {
        return (
          <div className="card" key={`${item.id}`}>
            <Link to={`/tvfulldetail/${item.id}`}>
            <img className="category_poster_img" src={`${baseImgurl}${item.poster_path}`} alt="poster" />
            </Link>
          </div>
        );
      })}
    </div>

    </div>
    
    </div>




  );
}

export default CategoryWiseTv;
