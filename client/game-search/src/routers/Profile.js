import React, {useState} from 'react'
import NewGame from "./NewGame"
import App from "../App.js"

import Border from "./images/border.png"


export default function Profile(props){
    const games = props.games
    const setGames = props.setGames
    const deleteGame = props.deleteGame
    const handleToggle = props.handleToggle
    
    console.log(games)
    
    const mappedGames = games.map((game) => {
       return (
           <div key={game._id} className="game-box">
                <h2 >{game.title}</h2>
                <h3>Players: {game.players}</h3> 
                <h3>Category: {game.category}</h3>
                <h3>Console: {game.gameConsole.join(', ')}</h3>    
                <h3>Rating: {game.rating}</h3> 
                <div className="game-box-btns">
                    <button className="profile-btn" onClick={()=>deleteGame(game._id)}>{}Delete Game</button>
                    <div className="profile-btn">                             
                        {game.isFavorite ? 
                            <img onClick={()=>handleToggle(game)} src="https://img.icons8.com/fluency/48/000000/pixel-heart.png"/>              
                        :   <img onClick={()=>handleToggle(game)} src="https://img.icons8.com/ios-filled/50/000000/pixel-heart.png"/>
                        }
                    </div>       
                </div>
                   
           </div>
       )
    })

    return (
        <div>
            <img className="zelda-img" src={Border}></img>
            <div className="profile-container">
            <NewGame setGames={setGames} />
                <div className="game-container">
                    <h1 id="my-game-title">My Games</h1>
                    <h2>{mappedGames}</h2>
                </div>             
            </div>
        </div>
        
    )
}





