import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryHero({cat_id}) {
  const [herobackground, setHeroBackground] = useState([]);
  const[movie,setMovie]=useState([])
  const [keywords, setKeywords] = useState([]);
  const [movieId, setMovieId] = useState("");
  const baseurl = `https://api.themoviedb.org/3/discover/tv?api_key=d6808d0ad50276bc5f432c356ac53f7a&page=1&with_genres=`;
  const baseImgurl = "https://image.tmdb.org/t/p/original";
    

  useEffect(() => {
    const fetchHeroBackground = async () => {
      const response = await axios.get(
          
        `${baseurl}${cat_id}`
      );

      const randomArray = response.data.results;
      console.log(randomArray);
      const randomElement =
        randomArray[Math.floor(Math.random() * randomArray.length - 1)];

      setMovie(randomElement);
      setHeroBackground(randomElement.backdrop_path);
      setMovieId(randomElement.id);
        console.log(randomElement);
      if (response.data) {
        const keywordsresponse = await axios.get(
          `https://api.themoviedb.org/3/tv/${randomElement.id}/keywords?api_key=d6808d0ad50276bc5f432c356ac53f7a`
        );
        console.log(keywordsresponse);
        setKeywords(keywordsresponse.data.results.slice(1,6));
      }
    };

    fetchHeroBackground();
  }, [setHeroBackground]);

  return (
    <>
      
      <div
        className="heroContainerBackground catrgoryMovieHero"
        style={{ backgroundImage: `url(${baseImgurl}${herobackground})` }}
      >
        
        <div className="category_container_background">
        <div className="HeroTitle">
          <div className="hero_title">{movie.name||movie.original_name }</div>
          <div className="hero_descpripction">{movie.overview}</div>
        </div>
          <div className="category_container">
            {keywords?keywords.map((item) => {
              return (
                <div className="tag" key={`${item.id}`}>
                  <span className="redDot">.</span>
                  {item.name}
                </div>
              );
            }):""}
          </div>
          <div className="category_contaier_second movieHerobtns">
            <div className="mylist">
              <div className="myliItem">
                <AddIcon />
              </div>
              <div className="myliItem">My List</div>
            </div>

            <Link to={`/tvfulldetail/${movieId}`}><div className="btn playbtn">
              <PlayArrowIcon />
              Play
            </div>
            </Link>
            <div className="info">
              <div className="infoItem">
                <InfoIcon />
              </div>
              <div className="infoItem">Info</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryHero;
