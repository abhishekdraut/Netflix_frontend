import { useParams } from "react-router-dom";

import FullTvDetails from "../components/fullDetails/fullTvdetails";
import UserContext from "../store/userContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


function FullTvDetail() {
    const params=useParams();
    const id =params.id;
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, []);
    

return(

    <FullTvDetails id={id}/>
)    
}

export default FullTvDetail;