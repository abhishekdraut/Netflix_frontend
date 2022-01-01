import { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "react-router-dom";
import requests from "../../request";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {useContext} from "react";
import UserContext from "../../store/userContext";

function Genre() {
  const [movieGeneres, setMovieGeneres] = useState([]);
  const [tvGeneres, settvGeneres] = useState([]);
  const navigate=useNavigate();
  const { user } = useContext(UserContext);


  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    async function fetchGeneres() {
      try {
        const response = await axios.get(requests.moviesGenresList);
        const response2 = await axios.get(requests.tvGenresList); 

        setMovieGeneres(response.data.genres);
        settvGeneres(response2.data.genres);
      } catch (error) {
        setMovieGeneres(error);
      }
      
    }
    fetchGeneres();
  }, [setMovieGeneres,settvGeneres,navigate]);
  function navigateBack(){
    navigate(-1)
  }
  return (
    <div className="genraContainer_background">
      <div className="genraContainer_outer">
      <div className="genraContainer">
        <div>
          Movies Category:
        </div>
        {movieGeneres.map((item) => {
          return (

           <Link to={`/categorymovie/${item.id}` }key={`${item.id}`}> <div  className="genraItem">
              <FiberManualRecordIcon className="category_dot"/>{item.name}
            </div>
            </Link>
          );
        })}
      </div>
      <div className="genraContainer">
        Series Category:
        {tvGeneres.map((item) => {
          return (

           <Link to={`/categorytv/${item.id}` }key={`${item.id}`}> <div  className="genraItem">
              <FiberManualRecordIcon className="category_dot"/>{item.name}
            </div>
            </Link>
          );
        })}
      </div>

      </div>
      

      <div className="closebtn" onClick={navigateBack}>
        
          <CancelIcon />
        
      </div>
    </div>
  );
}

export default Genre;
