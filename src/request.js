

const requests={
    fetchNetflix:`https://api.themoviedb.org/3/discover/tv?language=en-US&api_key=d6808d0ad50276bc5f432c356ac53f7a&with_networks=213&page=1`,
    moviesGenresList:"https://api.themoviedb.org/3/genre/movie/list?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US",
    tvGenresList:"https://api.themoviedb.org/3/genre/tv/list?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US",
    
    trendingAll:"https://api.themoviedb.org/3/trending/all/day?api_key=d6808d0ad50276bc5f432c356ac53f7a",
    trendingMovies:"https://api.themoviedb.org/3/trending/movie/day?api_key=d6808d0ad50276bc5f432c356ac53f7a",
    trendingTvs:"https://api.themoviedb.org/3/trending/tv/day?api_key=d6808d0ad50276bc5f432c356ac53f7a",
    
    topRatedMovies:"https://api.themoviedb.org/3/movie/top_rated?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    topRatedTvs:"https://api.themoviedb.org/3/tv/top_rated?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    
    popularMovies:"https://api.themoviedb.org/3/movie/popular?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    PopularTvs:"https://api.themoviedb.org/3/tv/popular?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",

    upcomingMovies:"https://api.themoviedb.org/3/movie/upcoming?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    latestTv:"https://api.themoviedb.org/3/tv/latest?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US",
    
    actionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=d6808d0ad50276bc5f432c356ac53f7a&with_genres=28&page=1",
    actionTv:"https://api.themoviedb.org/3/discover/tv?api_key=d6808d0ad50276bc5f432c356ac53f7a&sort_by=popularity.desc&page=1&with_genres=28",

    simillarMovies:"https://api.themoviedb.org/3/movie/634649/similar?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    simmilarTvs:"https://api.themoviedb.org/3/tv/{tv_id}/similar?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1",
    
    baseImgurl:"https://image.tmdb.org/t/p/w500",
    
    
    getDetails:"https://api.themoviedb.org/3/movie/{movie_id}?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US",
    getvideo:"https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US",
    
    getKeywords:"https://api.themoviedb.org/3/tv/71912/keywords?api_key=d6808d0ad50276bc5f432c356ac53f7a",

    serch:"https://api.themoviedb.org/3/search/multi?api_key=d6808d0ad50276bc5f432c356ac53f7a&language=en-US&page=1&include_adult=false&query=fifty",


    
}
export default requests;