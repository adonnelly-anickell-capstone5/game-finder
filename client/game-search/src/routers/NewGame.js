import e from 'express'
import React, {useState} from 'react'

export default function NewGame(props){
    const addGame = props.addGame
    const initInputs = {
        title: props.title || "", 
        players: props.players || "",
        category: props.category || "",
        console: props.console || "",
        rating: props.rating || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        setInputs(prevState => {
            return ({
                ...prevState,
                [e.target.name]:e.target.value
            })
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        addGame(inputs)
        console.log("successfully added... maybe")
        setInputs(prevState => {
            return ({
                ...prevState,
                [e.target.name]: ""
            })
        })
    }

    return(
        <form  className="form-container" onSubmit= {handleSubmit}>
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
                <select name="rating" id="rating" value={inputs.value} onChange={handleChange}>        
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
                    <input type="checkbox" id="PC" name="PC" value={inputs.console} text="PC"/>
                    <label for="PS4">PS 4</label>
                    <input type="checkbox" id="PS4" name="PS4" value={inputs.console}/>
                    <label for="PS5">PS 5</label>
                    <input type="checkbox" id="PS5" name="PS5" value={inputs.console}/>
                    <label for="XBoxONE">XBox One</label>
                    <input type="checkbox" id="XBoxONE" name="XBoxONE" value={inputs.console}/>
                    <label for="XBoxX">XBox X</label>
                    <input type="checkbox" id="XBoxX" name="XBoxX" value={inputs.console}/>
                </div>   
                    
                <button>Submit</button>      
            </div>
        </form>
    )
    
}

