import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function DetailsPage(){

    const history = useHistory(); 
    const dispatch = useDispatch(); 
    const movieID = useSelector(store=>store.currentMovieID)

    

    const fetchOneMovie = () => {
        
    }

    useEffect(() => {
        fetchOneMovie(); 
    }, [])

    function returnToHome(){
        history.push('/')
    }

return(

    <div>
        <h1>Movie Details</h1>
        <button data-testid="toList" onClick={returnToHome} >Return to Home</button>
        <div>
           


        </div>


    </div>

    )
}





export default DetailsPage; 