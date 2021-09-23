import React, {useState} from 'react'
import Form from '../Form.js'
import App from '../App.js'

function Suggested(props){
    const [favorite, setFavorite] = useState(false);
    const {title, players, category, gameConsole, _id} = props

    //fake games data for testing
    const games = [{ _id: 1, title:"Legend of zelda: Ocarina of Time", players: 1, category: "rpg", gameConsole: ["N64"]}, { _id:2, title: "Call of Duty"}]
    let faveGames = []

    const handleToggle = (newFave) => {
      setFavorite(!favorite);
        //   console.log(`favorite ${newFave.title}`)
          faveGames = [...faveGames, newFave]
          console.log(faveGames)
    }
        return(
            <div>

                <Form/>
                    <h1>Suggested Games</h1> 
                    <ul>
                        {games.map((item, index)=>( 
                        <li key={index}>
                            <h2>{item.title} </h2>
                            <p>Players: {item.players}</p>
                            <p>Category: {item.category}</p>
                            <p>Console: {item.gameConsole}</p>
                            <button 
                            onClick={()=>handleToggle(item)}
                            icon={favorite ? "heart" : "heart outline"}> heartIcon
                            </button> 
                        </li>)) }
                           
                    </ul>
            </div> 

            
            
    )
}

export default Suggested
