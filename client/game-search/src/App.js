import React, {useState, useEffect} from 'react'
import Nav from "../src/routers/Nav"
import axios from "axios"

// prevFave.isFavorite ? !prevFave.isFavorite: prevFave.isFavorite

export default function App(props){
    const [games, setGames] = useState([])   

    const handleToggle = (game) => {
        console.log("toggle has been pushed")
        editGame()
        console.log(games[14].isFavorite)
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

    //GET
    function getGames(){
        axios.get('/games',)
            .then(res => setGames(res.data))
            .catch(err => console.log(err))
    }
    //POST
    function addGame(inputs){
        axios.post(`/games`, inputs)
            .then(res=> {
                setGames(prev =>[...prev, inputs])
            })
            .catch(err => console.log(err))
    }

    //  DELETE from list
    function deleteGame(gameId){
        axios.delete(`/games/${gameId}`)
        .then(res =>{
            setGames(prev=> prev.filter(game => game._id !== gameId))
        })
        .catch(err => console.log(err))

    }
    
    useEffect(()=>{ 
        getGames()
        }, [])

    return(
        <div>
            <Nav games={games} setGames={setGames} deleteGame={deleteGame} handleToggle={handleToggle}/>
            {/* <Suggested submit = {addGame}/> */}
            
        </div>
    )
}

