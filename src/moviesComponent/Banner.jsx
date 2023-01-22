//banner
import React from 'react';

function Banner(){
    let[firstMovie,setFirstMovie]=React.useState("");
    React.useEffect(function(){
        async function fetchData(){
            let response= await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ddc6004d6d1940066b664d04c66ee808");
            let data= await response.json();
            console.log("data",data);
            let movies= data.results;
            setFirstMovie(movies[0]);
        }fetchData();
    },[]);
    return (
        <> 
        {firstMovie == "" ?
         <h2>Movies are yet to come</h2> :<>
           <h2> {firstMovie.original_title}</h2>
           <img src={"https://image.tmdb.org/t/p/original"+firstMovie.backdrop_path} className="banner_img"></img>
        </>}
        
        </>)
    
}
export default Banner;





