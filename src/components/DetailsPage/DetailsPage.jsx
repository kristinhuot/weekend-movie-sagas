import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function DetailsPage(){

    const history = useHistory(); 

    function returnToHome(){
        history.push('/')
    }

return(

    <div>
        <h1>Movie Details</h1>
        <button data-testid="toList" onClick={returnToHome} >Return to Home</button>



    </div>

    )
}





export default DetailsPage; 