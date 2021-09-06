import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './Form.js'
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
function deleteGame(gameId){
    axios.delete(`/games/${gameId}`)
        .then(res =>{
            setGames(prev=> prev.filter(game => game._id !== gameId))
        })
        .catch(err => console.log(err))

}

//PUT
function editGame(updates, gameId){
    axios.put(`/games/${gameId}`, updates)
        .then(res=>{
            setGames(prev => prev.map(game => game._id !== gameId ? game : res.data))
            console.log(updates)
        })
        .catch(err => console.log(err))
}

useEffect(()=>{ 
   getGames()
}, [])

  

    return(
        <div>
            <Form 
                submit= {}
                btnText ="Search"
            />
            <div>
            {
                games.map(game=> 
                <Display
                 {...game} 
                 key={game._id} 
                 deleteGame= {deleteGame}
                 editGame ={editGame}
                 />)
                
                }
                
            </div>
        </div>
    )

}