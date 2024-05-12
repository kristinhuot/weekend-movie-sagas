import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function DetailsPage(){

    const history = useHistory(); 
    const movieDetails = useSelector(store=>store.currentMovieDetails)
    const movieGenre = useSelector(store=>store.currentMovieGenres)

    //renders one movie and its details, image, genres
    function renderMovie(){

        if(movieDetails.length > 0){
            const movie=movieDetails[0]; 
        
        return(
            <div>
                <h2>{movie.title}</h2>
                <img data-testid="toDetails" src={movie.poster} alt={movie.title}/>
                <p>{movie.description}</p>
                <p>Genres: {movieGenre.map((genre) => genre.name).join(", ")}</p>
            </div>)            
    }
    return <div>No movie details found</div>
}
//renders one movie and its details upon load
    useEffect(() => {
        renderMovie
    }, [])

    function returnToHome(){
        history.push('/')
    }

return(

    <div data-testid="movieDetails">
        <h1>Movie Details</h1>
        <button data-testid="toList" onClick={returnToHome} >Return to Home</button>
        <div>
           {renderMovie()}
        </div>
    </div>

    )
}



export default DetailsPage; 