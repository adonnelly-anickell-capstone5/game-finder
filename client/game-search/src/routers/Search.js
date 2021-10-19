import React, { useState, useRef } from "react"
import zelda from "./images/zelda.png"
import Filters from "./Filters"
import Suggested from "./Suggested"

export default function Search(props) {
    const games = props.games
    const [dropValue, setDropValue] = useState()
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)
    
    const handleSelect = (e) => {
        executeScroll()
        console.log(e.target.value)
        setDropValue(e.target.value)
      }
    
    console.log(`The current value is ${dropValue}`)
    console.log(typeof dropValue)

    return (
        <div>
            <div className="button-holder">
                <img className="zelda-img" src={zelda} alt="zelda"></img>
                <div className="dropdown-sort">
                    <select name="playerList" id="playerList"  onChange={handleSelect}>        
                        <option> Sort by Player</option>       
                        <option value="1"> 1 Player</option>
                        <option value="2"> 2 Players</option>
                        <option value="3"> 3 Players</option>
                        <option value="4+" > 4+ Players</option>
                    </select>
                    <select name="categoryList" id="categoryList" onChange={handleSelect}>        
                        <option> Sort by Category</option>       
                        <option value="FPS">FPS</option>
                        <option value="Cozy">Cozy</option>
                        <option value="MMORPG">MMORPG</option>
                    </select>
                    <select name="ratingList" id="ratingList" onChange={handleSelect}>        
                        <option> Sort by Rating</option>       
                        <option value="high to low">Highest to Lowest</option>
                        <option value="low to high">Lowest to Highest</option>
                    </select>
                    <select name="consoleList" id="consoleList" onChange={handleSelect}>        
                        <option> Sort by Console</option> 
                        <option value="PC">PC</option>      
                        <option value="PS4">PS 4</option>
                        <option value="PS5">PS 5</option>
                        <option value="XBoxONE">XBox ONE</option>
                        <option value="XBoxX">XBox X</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                    </select>        
                </div>
                <h1 ref={myRef}>Suggested Games</h1>
                <Filters  games={games} dropValue={dropValue} />
                <Suggested/>
            </div>
        </div>
    )
}
