import React, {useState} from 'react'
import Form from '../Form.js'
import Suggested from './Suggested.js';
import App from '../App.js'

export default function Favorites(props){
    const {title, players, category, gameConsole, games, _id, isFavorite} = props    

    const favorites = games.map((item) => {
        return (
        item.isFavorite ? 
            (<ul>               
                <li key={item._id}>
                    <h2>{item.title} </h2>
                    <p>Players: {item.players}</p>
                    <p>Category: {item.category}</p>
                    <p>Console: {item.gameConsole}</p> 
                </li>
            </ul>)
        : null
    )})

    function noFavorites(games) {
        return games.isFavorite === false
    }

    //if favGames array is empty -> display "You haven't added anything to your Favortie games list yet"
    // ---else display mapped faveGames
        return (
            <div>
                {games.every(noFavorites) ? 
                    <> 
                    <h2>You havent added anything to your Favorites yet</h2>
                    <>To add a game to your favorites, click the heart Icon button below the game's name</>
                    </>
                :
                    <>
                       <h1>Favorite Games</h1> 
                        
                    </>
                } 
            </div> 

       
            
    )
}


