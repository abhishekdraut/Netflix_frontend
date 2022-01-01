import { Link } from "react-router-dom";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import NavbarForDetailsPage from "../navbar/navbarForDetailsPage";

function FullTvDetails({ id }) {
  const [tv, settv] = useState([]);
  const [video, setvideo] = useState([]);
  const [simillar, setSimmiller] = useState([]);
  const baseImgurl = "https://image.tmdb.org/t/p/w300";
  useEffect(() => {
    async function fetchTvData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US`
      );
      const responseVdo = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US`
      );
      const responseSimmillar = await axios.get(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1`
      );
      settv(response.data);
      const randomVdo =
        responseVdo.data.results[0];
        //   Math.floor(Math.random() * responseVdo.data.results.length - 1) for random index
        
      setvideo(randomVdo.key);
      setSimmiller(responseSimmillar.data.results);
    }
    fetchTvData();
  }, [settv, setvideo, setSimmiller,id]);
  function Simmiller() {
    if (simillar) {
      return simillar.map((item) => {
        return (
          <div className="simillarPoster" key={item.id}>
            <Link to={`/tvfulldetail/${item.id}`}> <img className="simillar_img" src={`${baseImgurl}${item.poster_path}`}alt="poster"/></Link>
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
              {tv.original_name || tv.name}
            </div>
            <div className="tagline">{tv.tagline ? tv.tagline : ""}</div>
            <div className="metaData">
              <div className="realseseDate">{tv.release_date}</div>

              <div className="adultTag btn">{tv.adult ? "adult" : "13+"}</div>
              <div className="language">
                {tv.original_language == "en"
                  ? "English"
                  : tv.original_language}
              </div>
              <div className="runtime">
                {tv.runtime ? tv.runtime + " m" : ""}
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
          <div className="overview">{tv.overview ? tv.overview : ""}</div>
        </div>
      </div>
      <div className="simillar_background">
        <div className="simillarborder">
          <div class="simillar_title">More Like This</div>
        </div>
      </div>

      <div className="similler_conatiner">
        <Simmiller />
      </div>
    </>
  );
}
export default FullTvDetails;
