import React, {useState} from 'react'
import Form from '../Form.js'
import App from '../App.js'
import Favorites from './Favorites'

function Suggested(props){
    const [favorite, setFavorite] = useState(false);
    const {title, players, category, gameConsole, _id} = props
    // const myGames = props.games
    // console.log(myGames)
    
    //fake games data for testing
    const games = [{ _id: 1, title:"Legend of zelda: Ocarina of Time", players: 1, category: "rpg", gameConsole: ["N64"]}, { _id:2, title: "Call of Duty"}]
    
    const faveGames = props.faveGames

    const handleToggle = (newFave) => {
      setFavorite(!favorite);
        //   console.log(`favorite ${newFave.title}`)
          faveGames = [...faveGames, newFave]
          console.log(faveGames)
    }
        return(
            <div>
                    <ul>
                        {games.map((item, index)=>( 
                        <li key={index}>
                            <h2>{item.title} </h2>
                            <p>Players: {item.players}</p>
                            <p>Category: {item.category}</p>
                            <p>Console: {item.gameConsole}</p>
                            <button onClick={()=>handleToggle(item)}>

                                  {/* //if this game is on the favorite list-> display full heart 
                                    //--else display empty heart */}
                                {!favorite ? <img src="https://img.icons8.com/fluency/48/000000/pixel-heart.png"/>

                                : <img src="https://img.icons8.com/ios-filled/50/000000/pixel-heart.png"/>}

                            </button> 
                        </li>)) }
                           
                    </ul> 
            </div> 

            
            
    )
}

export default Suggested
