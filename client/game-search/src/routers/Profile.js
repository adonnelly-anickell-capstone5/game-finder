import React, { useState, useEffect } from "react"
import Form from "../Form"
import axios from "axios"


function Profile(props){
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

    //DELETE from fave list

    
    useEffect(()=>{ 
        getGames()
     }, [])

    return(
        <div>
            {/* map through the saved items and display in list */}

            <button onClick={()=>props.deleteFave(/*_id*/)}>Delete From List</button>
        </div>
    )
}

export default Profile