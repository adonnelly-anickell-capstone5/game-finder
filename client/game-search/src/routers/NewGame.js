import React, {useState} from 'react'
import axios from "axios"


export default function NewGame(props){
    const initInputs = {
        title: "", 
        players: "",
        category: "",
        gameConsole: [],
        rating: ""
    }
    const setGames = props.setGames
    const [inputs, setInputs] = useState(initInputs)
    const checkPC = document.getElementById("PC")
    const checkPS4 = document.getElementById("PS4")
    const checkPS5 = document.getElementById("PS5")
    const checkXBoxONE = document.getElementById("XBoxONE")
    const checkXBoxX = document.getElementById("XBoxX")

    function handleChange(e){
        setInputs(prevState => {
            return ({
                ...prevState,
                [e.target.name]:e.target.value
            })
        })
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

    return (
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
                    <label htmlFor="PC">PC
                    <input  
                        type="checkbox" 
                        id="PC" 
                        name="gameConsole"  
                        value="PC" 
                        onChange={() => {if (checkPC.checked === true) {inputs.gameConsole.push(checkPC.value)}}}
                    /></label>
                    <label htmlFor="PS4">PS 4
                    <input 
                        type="checkbox" 
                        id="PS4" 
                        name="gameConsole" 
                        value="PS4" 
                        onChange={() => {if (checkPS4.checked === true) {inputs.gameConsole.push(checkPS4.value)}}} 
                    /></label>
                    <label htmlFor="PS5">PS 5
                    <input 
                        type="checkbox" 
                        id="PS5" 
                        name="gameConsole" 
                        value="PS5" 
                        onChange={() => {if (checkPS5.checked === true) {inputs.gameConsole.push(checkPS5.value)}}} 
                    /></label>
                    <label htmlFor="XBoxONE">XBox One
                    <input 
                        type="checkbox" 
                        id="XBoxONE" 
                        name="gameConsole" 
                        value="XBoxONE" 
                        onChange={() => {if (checkXBoxONE.checked === true) {inputs.gameConsole.push(checkXBoxONE.value)}}} 
                    /></label>
                    <label htmlFor="XBoxX">XBox X
                    <input 
                        type="checkbox" 
                        id="XBoxX" 
                        name="gameConsole" 
                        value="XBoxX" 
                        onChange={() => {if (checkXBoxX.checked === true) {inputs.gameConsole.push(checkXBoxX.value)}}} 
                    /></label>
                </div>   
                <button>Submit</button>      
            </div>
        </form>
    )
    
}

