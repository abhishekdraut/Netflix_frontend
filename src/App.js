import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genre from "./components/navbar/genre";
import CategoryWiseMovieLoad from "./pages/categoryWiseMoviePage";
import CategoryWiseTvLoad from "./pages/categorywiseTvpage";


import FullMovieDetail from "./pages/fullMovieDetailPage";
import FullTvDetail from "./pages/fullTvdetailsPage";

import Home from "./pages/home";
import Login from "./pages/loginPage";
import Movies from "./pages/movies";
import Series from "./pages/series";
import SignUp from "./pages/signupPage";
import StartPage from "./pages/startPage";
import Trending from "./pages/trendingPage";
import { UserContextProvider } from "./store/userContext";

function App() {
  return (
    <>
    <UserContextProvider >

    
      <Router>
        <Routes>
          <Route path="/" exact element={<StartPage/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>}/>
          
          <Route path="/home" exact element={<Home />} />
          <Route path="/categories" exact element={<Genre />} />
          <Route path="/series" exact element={<Series/>} />
          <Route path="/movies" exact element={<Movies/>} />
          <Route path="/trending" exact element={<Trending />}/>
          
          <Route path="/categorymovie/:id" exact element={<CategoryWiseMovieLoad/>}/>
          <Route path="/categorytv/:id" exact element={<CategoryWiseTvLoad/>}/>
          <Route path="/moviefulldetail/:id" exact element={<FullMovieDetail/>}/>
          <Route path="/tvfulldetail/:id" exact element={<FullTvDetail/>}/>

        </Routes>
        
      </Router>
      
      </UserContextProvider>
    </>
  );
}

export default App;
