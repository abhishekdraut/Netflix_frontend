import { Link } from "react-router-dom";
import requests from "../../request";
import axios from "axios";
import { useState, useEffect } from "react";
function TopRatedRowTv() {
  const [netflixrow1, setnetflixrow1] = useState([]);
  const baseImgurl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function fetchnetflixdata() {
      const responseArray = [];
      for (let index = 1; index <= 1; index++) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=${index}`
        );
        responseArray.push(response.data.results);
      }
      setnetflixrow1(responseArray.flat());
    }
    fetchnetflixdata();
  }, []);

  function NetflixRow() {
    if (netflixrow1) {
      return netflixrow1.map((item) => {
        return (
          <div className="row_poster" key={`${item.id}`}>
            <Link to={`/tvfulldetail/${item.id}`}> <img
              className="row_img"
              src={`${baseImgurl}${item.poster_path}`}
              alt={item.name}
            /></Link>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }

  return (
    <div className="netflixrow_background background">
      <div className="row_title">Top Rated Series</div>
      <div className="netflix_originals row">
        <NetflixRow />
      </div>
    </div>
  );
}

export default TopRatedRowTv;
