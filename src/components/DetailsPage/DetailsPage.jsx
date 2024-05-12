import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function DetailsPage(){

    const history = useHistory(); 
    const dispatch = useDispatch(); 
    const movieID = useSelector(store=>store.currentMovieID)
    const movieDetails = useSelector(store=>store.currentMovieDetails)
    const movieGenre = useSelector(store=>store.currentMovieGenres)

    function renderMovie(){

        if(movieDetails.length > 0){
            const movie=movieDetails[0]; 
        
        return(
            <div>
                <h2>{movie.title}</h2>
                <img src={movie.poster}/>
                <p>{movie.description}</p>
                <p>Genres: {movieGenre.map((genre) => genre.name).join(", ")}</p>
            </div>)            
    }}

    useEffect(() => {
        renderMovie
    }, [])

    function returnToHome(){
        history.push('/')
    }

return(

    <div>
        <h1>Movie Details</h1>
        <button data-testid="toList" onClick={returnToHome} >Return to Home</button>
        <div>
           {renderMovie()}
        </div>


    </div>

    )
}



export default DetailsPage; 