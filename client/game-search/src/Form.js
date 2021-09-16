import React, {useState} from 'react'
import Profile from './routers/Profile.js'


export default function Form(props){
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
        props.getGames(inputs, props._id)
        setInputs(initInputs)
    }


    return(
        <form onSubmit= {handleSubmit}>
            
        <select id = "dropdown" onChange ={handleChange}  >  
            <option> ---Sort By--- </option>  
            <option value={inputs.title}> Title </option>  
            <option value={inputs.category}> Category </option>  
            <option value={inputs.console}> Console </option>  
            <option value={inputs.rating}> Rating </option>  
        </select>  

            <button >Submit</button>

        </form>
    )
    
}

