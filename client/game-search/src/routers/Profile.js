import React, { useState, useEffect } from "react"
import Form from "../Form"
import axios from "axios"


function Profile(props){
    const [games, setGames] = useState([])
    const [faveGames, setFaveGames] = useState([])

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
    function deleteFave(faveId){
        axios.delete(`/faveGames/${faveId}`)
        .then(res =>{
            setFaveGames(prev=> prev.filter(fave => fave._id !== faveId))
        })
        .catch(err => console.log(err))

    }
    
    useEffect(()=>{ 
        getGames()
     }, [])

    return(
        <div>
            <Suggested submit = {addGame}/>
            {
                games.map(game=> 
                <Display
                 {...faveGames} 
                 key={faveGames._id} 
                 deleteBounty= {deleteFave}
                 />)
                
                }

            <button onClick={()=>props.deleteFave(/*_id*/)}>Delete From List</button>
        </div>
    )
}

export default Profile