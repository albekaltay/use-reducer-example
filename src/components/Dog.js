
import React, { useReducer } from 'react'
import Reducer from './Reducer'


const initialState = {

    data: "",
    loading: false,
    error: ""


}


const Dog = () => {

const [state, dispatch] = useReducer(Reducer, initialState)
const {data, loading , error} = state;

const fetchDog = () => {
dispatch({type: "FETCH_START"})

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then((response) =>  dispatch({type:"FETCH_SUCCESS", payload: response.message}))
    .then(data => console.log(data))
   .catch( () => { dispatch({type: "FETCH_ERROR", payload: "ERROR FETCHING DATA"})})

   


}

  return (
    <div>    
        
        <button onClick={fetchDog} disabled={loading}> change picture</button>
        <div>
            {data &&  

               ( <div>

                        <img src={data} alt="Random dog" />

                </div>)
            
            }

            {error && <p>{error}</p>}

        </div>
    </div>

  )
}

export default Dog