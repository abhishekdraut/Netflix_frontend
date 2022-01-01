import Hero from "../components/Hero/hero";
import Navbar from "../components/navbar/navbar";
import OriginalsRow1 from "../components/posterRows/originalsRow1";
import OriginalsRow2 from "../components/posterRows/originalsRow2";
import PopularMovie from "../components/posterRows/popularMovies";
import PopularTv from "../components/posterRows/popularTv";
import TopRatedRowMovies from "../components/posterRows/topRatedMovies";
import TopRatedRowTv from "../components/posterRows/topRatedTv";
import TrendingRowMovies from "../components/posterRows/trendingRowMovies";
import TrendingRowTv from "../components/posterRows/trendingRowTv";
import UserContext from "../store/userContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";


function Home() {
  const{user}=useContext(UserContext);
  const navigate=useNavigate();
  
  useEffect(()=>{
    if(user===null){
      navigate("/login")
    }

  },[])
  
  return(
    <>
           
        <Navbar />
        <Hero />
        <OriginalsRow1 />
        <PopularTv />
        <TrendingRowMovies />
        <PopularMovie />
        <OriginalsRow2/>
        <TrendingRowTv />
        <TopRatedRowMovies />
        <TopRatedRowTv />
  
      </>
  )
  
  
}
export default Home;
