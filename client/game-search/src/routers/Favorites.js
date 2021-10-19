import React, {useState} from 'react'
import Form from '../Form.js'
import Suggested from './Suggested.js';
import App from '../App.js'

export default function Favorites(props){
    const {title, players, category, gameConsole, _id, isFavorite} = props
    const {faveGames} = props

    //if favGames array is empty -> display "You haven't added anything to your Favortie games list yet"
    // ---else display mapped faveGames
        return(
            <div>
                {faveGames.length == 0 ? 
                    <> 
                    <h2>You havent added anything to your Favorites yet</h2>
                    <>To add a game to your favorites, click the heart Icon button below the game's name</>
                    </>
                :
                    <>
                    <Form/>
                        <h1>Favorite Games</h1> 
                        <ul>
                            {faveGames.map((item, id)=>( 
                            <li key={id}>
                                <h2>{item.title} </h2>
                                <p>Players: {item.players}</p>
                                <p>Category: {item.category}</p>
                                <p>Console: {item.gameConsole}</p> 
                                <button onClick={props.handleToggle(item)}>{item.isFavorite ? "Delete From List" : "Add back to list"}</button>
                            </li>)) }   
                        </ul> 
                    </>
                } 
            </div> 

       
            
    )
}


