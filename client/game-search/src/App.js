import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './Form.js'
import Nav from "../src/routers/Nav"
import Display from './Display.js'

export default function App(){
    const [games, setGames] = useState([])

  //GET
  function getGames(){
    axios.get('/games',)
        .then(res => setGames(res.data))
        .catch(err => console.log(err))
}

//POST
function addGame(newGame){
    axios.post(`/games`, newGame)
        .then(res=> {
            setGames(prev =>[...prev, newGame])
        })
        .catch(err => console.log(err))
}

//DELETE


//PUT


useEffect(()=>{ 
   getGames()
}, [])

  

    return(
        <div>
            <Nav />
            <Form 
                submit= {addGame}
                btnText ="Search"
            />
            <div>
                
            </div>
        </div>
    )

}