import React, {useState} from 'react'
import axios from "axios"


export default function NewGame(props){
    const initInputs = {
        title: "", 
        players: "",
        category: "",
        gameConsole: "",
        rating: ""
    }
    const setGames = props.setGames
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        setInputs(prevState => {
            return ({
                ...prevState,
                [e.target.name]:e.target.value
            })
        })
        const checkInputs = []
        for(let i = 0; i <= inputs.gameConsole.checked; i++){
            if(inputs.gameConsole[i].checked){  
                checkInputs.push(inputs.gameConsole[i].value)
            }
            console.log("for loop is running")
        }
    }
    
    function addGame(){
    axios.post(`/games`, inputs)
        .then(res=> {
            setGames(prev =>[...prev, inputs])
        })
        .catch(err => console.log(err))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        addGame(inputs)
        setInputs(prevState => {
            return ({
                ...prevState,
                [e.target.name]: ""
            })
        })
    }



    return(
        <form  className="form-container" onSubmit= {handleSubmit} autoComplete="off">
            <div className="new-game">
                <h1>Add New Game</h1>
                <input
                        value={inputs.title}
                        name="title" 
                        type="search"
                        placeholder="Type Name of Game Here"
                        onChange={handleChange}
                    />
                <select name="players" id="players"  value={inputs.players} onChange={handleChange}>        
                    <option> Select Number of Players</option>       
                    <option value="1"> 1 Player</option>
                    <option value="2"> 2 Players</option>
                    <option value="3"> 3 Players</option>
                    <option value="4+" > 4+ Players</option>
                </select>
                <select name="category" id="category" value={inputs.category} onChange={handleChange}>        
                    <option> Choose Category</option>       
                    <option value="FPS">FPS</option>
                    <option value="Cozy">Cozy</option>
                    <option value="MMORPG">MMORPG</option>
                </select>
                <select name="rating" id="rating" value={inputs.rating} onChange={handleChange}>        
                    <option> Rate It</option>       
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>  
                <h2>Consoles:</h2>
                <div className="checkbox">
                    <label for="PC">PC</label>
                    <input type="checkbox" id="PC" name="gameConsole"  value="PC" onChange={handleChange} checked={inputs.gameConsole.PC}/>
                    <label for="PS4">PS 4</label>
                    <input type="checkbox" id="PS4" name="gameConsole" value="PS4" onChange={handleChange} checked={inputs.gameConsole.PS4}/>
                    <label for="PS5">PS 5</label>
                    <input type="checkbox" id="PS5" name="gameConsole" value="PS5" onChange={handleChange} checked={inputs.gameConsole.PS5}/>
                    <label for="XBoxONE">XBox One</label>
                    <input type="checkbox" id="XBoxONE" name="gameConsole" value="XBoxONE" onChange={handleChange} checked={inputs.gameConsole.XBoxONE}/>
                    <label for="XBoxX">XBox X</label>
                    <input type="checkbox" id="XBoxX" name="gameConsole" value="XBoxX" onChange={handleChange} checked={inputs.gameConsole.XBoxX}/>
                </div>   
                <button>Submit</button>      
            </div>
        </form>
    )
    
}

