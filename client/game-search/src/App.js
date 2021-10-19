import React, {useState, useEffect} from 'react'
import Nav from "../src/routers/Nav"
import axios from "axios"

export default function App(props){
    const [games, setGames] = useState([])
    const [faveGames, setFaveGames] = useState([])
   
 
    const handleToggle = (fave) => {

        // setFaveGames(prevFaves => {
        //     if (prevFaves.includes(fave._id))
        //       const copy = [...prevFaves]
        //       return copy.splice(copy.findIndex() ,1)

        //     return 
        // });

        setFaveGames(prevFaves => prevFaves
            .map(game => game._id !== fave._id ? game : {...fave, isFavorite: !fave.isFavorite}));
           console.log(`favorite ${fave.title}`)

           fave.isFavorite = !isFavorite

           console.log(faveGames)
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
                <Nav games={games} setGames={setGames}/>
                {/* <Suggested submit = {addGame}/> */}
               
            </div>
        )
    }
    
