import { Dropdown } from "bootstrap"
import React from "react"

export default function Filters(props) {
    const games = props.games
    const dropValue = props.dropValue
    
    const players = games.filter(games => {
        if (dropValue === "4+" && games.players >= 4) {
            return true
        } 
        return games.players === Number(dropValue)
    }).map(games => {  
        return (
                <div className="game-box">
                    <h2>{games.title}</h2>
                    <h3>Players: {games.players}</h3> 
                    <h3>Category: {games.category}</h3>
                    <h3>Console: {games.gameConsole}</h3>    
                    <h3>Rating: {games.rating}</h3>          
                </div>
        )}
    )

    const category = games.filter(games => {
        return games.category === dropValue
    }).map(games => {  
        return (
                <div className="game-box">
                    <h2>{games.title}</h2>
                    <h3>Players: {games.players}</h3> 
                    <h3>Category: {games.category}</h3>
                    <h3>Console: {games.gameConsole}</h3>    
                    <h3>Rating: {games.rating}</h3>          
                </div>
        )}
    )

    const console = games.filter(games => {
        return games.gameConsole === dropValue
    }).map(games => {  
        return (
                <div className="game-box">
                    <h2>{games.title}</h2>
                    <h3>Players: {games.players}</h3> 
                    <h3>Category: {games.category}</h3>
                    <h3>Console: {games.gameConsole}</h3>    
                    <h3>Rating: {games.rating}</h3>          
                </div>
        )}
    )

    const lowHighRatings = games.sort((a, b) => {
        return a.rating - b.rating
    }).map(games => {  
        return (
                <div className="game-box">
                    <h2>{games.title}</h2>
                    <h3>Players: {games.players}</h3> 
                    <h3>Category: {games.category}</h3>
                    <h3>Console: {games.gameConsole}</h3>    
                    <h3>Rating: {games.rating}</h3>          
                </div>
        )}
    )

    const highLowRatings = games.sort((a, b) => {
        return b.rating - a.rating
    }).map(games => {  
        return (
                <div className="game-box">
                    <h2>{games.title}</h2>
                    <h3>Players: {games.players}</h3> 
                    <h3>Category: {games.category}</h3>
                    <h3>Console: {games.gameConsole}</h3>    
                    <h3>Rating: {games.rating}</h3>          
                </div>
        )}
    )

    return (
        //conditional rendering based on which dropdown was selected below
        <div>
            {players}
        </div>
    )
}