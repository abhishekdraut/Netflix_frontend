import { useParams } from "react-router-dom";
import FullMovieDetails from "../components/fullDetails/fullMovieDetails";
import UserContext from "../store/userContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


function FullMovieDetail() {
  const params = useParams();
  const id = params.id;
  const { user } = useContext(UserContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, []);

  return <FullMovieDetails id={id} />;
}

export default FullMovieDetail;
