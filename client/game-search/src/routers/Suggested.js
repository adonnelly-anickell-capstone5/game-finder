import React, {useState} from 'react'
import Search from "./Search.js"
import Form from './Form.js'

function Suggested(props){
    const [favorite, setFavorite] = useState([]);

    const handleToggle = (id) => {
      setFavorite([...favorite, id]);
    }

        return(
            <div>
                    <Search/>
                    {/* searchTerm prop from Form */}
                    <h1>Results for {props.inputs.searchTerm}</h1> 
                  
                            <ul><li>{props.games.map(game=>{game.title})}</li></ul>

                            {favorite.map((item,index) => {
                                <button 
                                    key={index} 
                                    onClick={()=>handleToggle(index)}
                                    color={favorite.indexOf(index) > 0 ? 'red' : 'blue'}> </button>
                                })}
                            
                     
            </div> 

            
            
    )
}

export default Suggested