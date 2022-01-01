
import {useState, useEffect,useContext} from "react"
import UserContext from "../store/userContext"
import axios from "axios";
import{useNavigate} from "react-router-dom";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Login() {
    
    const[username,setUsername]=useState(null);
    const [password,setPasword]=useState(null);
    const{user,setUser}=useContext(UserContext);
    const [msg ,setMsg]=useState(null);
    const navigate=useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault();

        if(username===null){
            setMsg("Email Field Could not be empty")
            
        }
        if (password==null){
            setMsg("Password Field Could not be empty")
        }
        else{
            try {
                const response= await axios.post('https://show-movie.herokuapp.com/netflixAuth',{"username":`${username}`,"password":`${password}`});
                setUser(response.data.token)
                navigate("/home")
                
            } catch (error) {
                setMsg("Invalid Credentials");
               
                
                
            }
            
            
        }
    }
    function navigateBack(){
      navigate(-1)
    }
    

  return (
    <div className="startPage_container">
      <div className="startPage_navbar">
        <div className="startPage_logo" onClick={navigateBack}>
        
          <div className="header_logo">ShowMovi<MovieCreationIcon/></div>
        </div>

        <div className="languae_btn btn">English</div>
        
          <div className="signin_btn btn">Sign Up</div>
        
      </div>
      <div className="hero_text_container_background">
        <div className="login_container">
            <form className="login_form">
            <div className="email_conatainer input_container">
            <label htmlFor="username">Username</label>
            <input  type="text" className="input" onChange={(e)=>{setMsg(null);setUsername(e.target.value)}} name="username" placeholder="Enter your email"/>
            </div>

            <div className="password_conatiner  input_container">
            <label htmlFor="password">password</label>
            <input type="password" onChange={(e)=>{setMsg(null);setPasword(e.target.value)}} className="input" name="password" placeholder="Enter your password"/>  
            </div>
            
            <input className="submit_btn btn" onClick={handleSubmit} type="submit" value="Login"/> 
            <div className="msg_container">{msg ? msg :"" }</div>
            <div className="copyrights login_form_copyrights">
            
            <CopyrightIcon/> 2021 Abhishek Raut.
        
            
          </div>


            </form>
            

        </div>
      </div>
    </div>
  );
}

export default Login;
