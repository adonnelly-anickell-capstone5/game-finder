import React, {useState} from 'react'
import Search from "./Search.js"
import Form from '../Form.js'

export default function Suggested(props){
    const [edit, setEdit] = useState(false)
    const [favorite, setFavorite] = useState([]);

    const handleToggle = (id) => {
      setFavorite([...favorite, id]);
    }

        return(
            <div>
                {/* {!edit ?   
                <> */}
                    {/* <Search/> */ } 
                    {/* searchTerm prop from Form */}
                    {/* <h1>Results for {props.inputs.searchTerm}</h1> 
                  
                            <ul><li>{props.games.map(game=>{game.title})}</li></ul>

                            {favorite.map((item,index) => {
                                <button 
                                    key={index} 
                                    onClick={()=>handleToggle(index)}
                                    color={favorite.indexOf(index) > 0 ? 'red' : 'blue'}> </button>
                                })} */}
                            
                    
                {/* </>
                
                :
                <>
                    <Search/>
                    <button onClick= {props.getGames()}>SEARCH!</button>
                    <h1>Results</h1>
                    
                            <ul><li>{props.games.map(game=>{game.title})}</li></ul>  
                            <button onClick={props.handleToggle()}>Save Game</button>
                            <button onClick={()=>setFavorite(prevToggle => !prevToggle)}>Toggle Off</button> 
                            {/*  heart image-- full*/}
                    {/* </>  
                
                } */} 
            </div> 

            
            
    )
}

