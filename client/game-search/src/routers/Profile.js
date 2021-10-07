import React, {useState} from 'react'
import NewGame from "./NewGame"


export default function Profile(props){
    const faveGames = props.faveGames
    const games = props.games

    console.log(games)
    
    const mappedGames = games.map((game) => {
       return (
           <div className="game-box">
                <h2>{game.title}</h2>
                <h3>Players: {game.players}</h3> 
                <h3>Category: {game.category}</h3>
                <h3>Console: {game.gameConsole}</h3>    
                <h3>Rating: {game.rating}</h3>          
           </div>
           

       )
        console.log(game.title)
       
    })
    return(
        <div className="profile-container">
            <NewGame />
           <div className="game-container">
                <h1 id="my-game-title">My Games</h1>
                <h2>{mappedGames}</h2>
           </div>             
        </div>
    )
}


 {/* <h1>Your Favorite Games List</h1>
           {faveGames.map((item)=>( 
                        <li key={item._id}>
                            <h2>{item.title} </h2>
                            <p>Players: {item.players}</p>
                            <p>Category: {item.category}</p>
                            <p>Console: {item.gameConsole}</p>
                            <button onClick={()=>props.deleteFave(item._id)}>Delete From List</button>
                        </li>)) } */}