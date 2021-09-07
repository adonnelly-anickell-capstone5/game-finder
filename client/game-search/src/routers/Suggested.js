import React, {useState} from 'react'
import Search from "./Search.js"
import App from './App.js'

function Suggested(props){
    const [heartToggle, setHeartToggle] = useState(false)

        return(
            <div>
                {!heartToggle ?   
                <>
                    <Search/>
                    <button onClick= {props.getGames()}>SEARCH!</button>
                    <h1>Results</h1>
                    <h3>{props}</h3>
                            <ul><li>{props}</li></ul>  
                            <button onClick={props.saveGame()}>Save Game</button>
                            <button onClick={()=>setHeartToggle(prevToggle => !prevToggle)}>Favorite</button> 
                            {/*  heart image-- empty*/}
                </>
                
                :
                <>
                    <Search/>
                    <button onClick= {props.getGames()}>SEARCH!</button>
                    <h1>Results</h1>
                    <h3>{props}</h3>
                            <ul><li>{props}</li></ul>  
                            <button onClick={props.saveGame()}>Save Game</button>
                            <button onClick={()=>setHeartToggle(prevToggle => !prevToggle)}>Toggle Off</button> 
                            {/*  heart image-- full*/}
                    </>  
                
                }
            </div> 

            
            
    )
}

export default Suggested