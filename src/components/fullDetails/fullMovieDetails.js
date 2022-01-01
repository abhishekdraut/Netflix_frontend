import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import NavbarForDetailsPage from "../navbar/navbarForDetailsPage";

function FullMovieDetails({ id }) {
  const [movie, setMovie] = useState([]);
  const [video, setvideo] = useState([]);
  const [simillar, setSimmiller] = useState([]);
  const baseImgurl = "https://image.tmdb.org/t/p/w300";
  useEffect(() => {
    async function fetchMovieData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US`
      );
      const responseVdo = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US`
      );
      const responseSimmillar = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1`
      );

      setMovie(response.data);
      
      const randomVdo=responseVdo.data.results[0]/* Math.floor(Math.random() * responseVdo.data.results.length-1) for random index*/
      setSimmiller(responseSimmillar.data.results);
      
      setvideo(randomVdo.key);
      
    }
    fetchMovieData();
  }, [setMovie, setvideo, setSimmiller,id]);

 
  function Simmiller() {
    if (simillar) {
      return simillar.map((item) => {
        return (
          <div className="simillarPoster" key={item.id}>
           <Link to={`/moviefulldetail/${item.id}`}><img
              className="simillar_img"
              src={`${baseImgurl}${item.poster_path}`}
              alt="poster"
            /></Link>
          </div>
        );
      });
    } else {
      return <div></div>;
    }
  }

  return (
    <>
      <NavbarForDetailsPage />
      <div className="fullDetail_Container">
        <div className="fullMovieDetaills">
          <div className="video_container">
            <iframe
              className="video"
              src={`https://www.youtube.com/embed/${video}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay "
              allowFullScreen
            ></iframe>
          </div>
          <div className="movieData">
            <div className="fullMovieDetaills title">
              {movie.original_title || movie.title}
            </div>
            <div className="tagline">{movie.tagline ? movie.tagline : ""}</div>
            <div className="metaData">
              <div className="realseseDate">{movie.release_date}</div>

              <div className="adultTag btn">
                {movie.adult ? "adult" : "13+"}
              </div>
              <div className="language">
                {movie.original_language =="en"
                  ? "English"
                  : movie.original_language}
              </div>
              <div className="runtime">
                {movie.runtime ? movie.runtime + " m" : ""}
              </div>
            </div>
          </div>
          <div className="btns">
            <div className="playbtn playvideobtn btn">
              <div>
                <PlayArrowIcon />
              </div>
              <div>Play</div>
            </div>
            <div className="downloadbtn btn">
              <div>
                <DownloadIcon />
              </div>
              <div>Download</div>
            </div>
          </div>
          <div className="overview">{movie.overview ? movie.overview : ""}</div>
        </div>
      </div>
      <div className="simillar_background">
        <div className="simillarborder">
          <div className="simillar_title">More Like This</div>
        </div>
      </div>

      <div className="similler_conatiner">
        <Simmiller />
      </div>
    </>
  );
}
export default FullMovieDetails;
