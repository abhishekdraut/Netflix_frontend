import CategoryWiseTv from "../components/categoryWise/categoryWiseTv";
import { useParams } from "react-router-dom";
import UserContext from "../store/userContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";



function CategoryWiseTvLoad() {
    const params=useParams()
    const id=params.id
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
   
    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, []);



    return(
        <CategoryWiseTv category_id={id}/>
    )
        
        

    
    
}

export default CategoryWiseTvLoad;