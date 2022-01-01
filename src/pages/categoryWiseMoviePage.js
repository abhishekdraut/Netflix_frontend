import CategoryWiseMovie from "../components/categoryWise/categoryWisemovie";
import { useParams } from "react-router-dom";
import UserContext from "../store/userContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


function CategoryWiseMovieLoad() {
    const params=useParams()
    const id=params.id
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, [navigate]);


    return(
        <CategoryWiseMovie category_id={id}/>
    )
        
        

    
    
}

export default CategoryWiseMovieLoad;