import React, {useState} from 'react'

export default function NewGame(props){
    const initInputs = {
        title: props.title || "", 
        players: props.players || "",
        price: props.price || "",
        category: props.category || "",
        console: props.console || "",
        rating: props.rating || ""
    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        //get post function from props
        setInputs(initInputs)
    }


    return(
        <form  className="form-container" onSubmit= {handleSubmit}>
            <div className="new-game">
                <h1>Add Game</h1>
                <input
                        // value={}
                        name="gameName" 
                        type="search"
                        placeholder="Name of the Game"
                        onChange={handleChange}
                    />
                <select name="playerList" id="playerList"  onChange={handleChange}>        
                    <option> Number of Players</option>       
                    <option value="1"> 1 Player</option>
                    <option value="2"> 2 Players</option>
                    <option value="3"> 3 Players</option>
                    <option value="4+" > 4+ Players</option>
                </select>
                <select name="categoryList" id="categoryList" onChange={handleChange}>        
                    <option> Choose Category</option>       
                    <option value="FPS">FPS</option>
                    <option value="Cozy">Cozy</option>
                    <option value="MMORPG">MMORPG</option>
                </select>
                <select name="ratingList" id="ratingList" onChange={handleChange}>        
                    <option> Rate It</option>       
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="">5</option>
                </select>
                <select name="consoleList" id="consoleList" onChange={handleChange}>       
                    <option> What console?</option> 
                    <option value="PC">PC</option>      
                    <option value="PS4">PS 4</option>
                    <option value="PS5">PS 5</option>
                    <option value="XBoxONE">XBox ONE</option>
                    <option value="XBoxX">XBox X</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                </select>  
                <button >Submit</button>      
            </div>
        </form>
    )
    
}

