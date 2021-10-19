import React, {Component, useState} from 'react'
import Form from '../Form.js'
import Favorites from './Favorites'
import App from '../App.js'

function Suggested(props){
    const {title, players, category, gameConsole, _id} = props 
    const {faveGames} = props
    //fake games data for testing
    const games = [{ _id: 1, title:"Legend of zelda: Ocarina of Time", players: 1, category: "rpg", gameConsole: ["N64"]}, { _id:2, title: "Call of Duty"}]
    
    
        return(
            <div>
                    <ul>
                        {games.map((item)=>( 
                        <li key={item._id}>
                            <h2>{item.title} </h2>
                            <p>Players: {item.players}</p>
                            <p>Category: {item.category}</p>
                            <p>Console: {item.gameConsole}</p>
                            <button onClick={()=>props.handleToggle(item)}>

                                  {/* //if this game is on the favorite list-> display full heart 
                                    //--else display empty heart */}
                                  
                                {faveGames.find(game=> game._id === item._id)? <img src="https://img.icons8.com/fluency/48/000000/pixel-heart.png"/>
                                            
                                : <img src="https://img.icons8.com/ios-filled/50/000000/pixel-heart.png"/>
                            }
                            </button> 
                        </li>)) }
                           
                    </ul> 
            </div> 

            
            
    )
}

export default Suggested




