import React, {useState} from 'react'
import App from '../App.js'

export default function Profile(props){
    return(
        <div>
            <h1>Your Favorite Games List</h1>
           {faveGames.map((item)=>( 
                        <li key={item._id}>
                            <h2>{item.title} </h2>
                            <p>Players: {item.players}</p>
                            <p>Category: {item.category}</p>
                            <p>Console: {item.gameConsole}</p>
                            <button onClick={()=>props.deleteFave(item._id)}>Delete From List</button>
                        </li>)) }
        </div>
    )
}