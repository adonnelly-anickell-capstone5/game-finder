import React, { useState } from "react"
import { usePopper } from 'react-popper';
import axios from "axios"
import zelda from "./images/zelda.png"

export default function Search(props) {
 
    
    return (
        <div>
            <div className="button-holder">
                <img className="zelda-img" src={zelda} alt="zelda"></img>
                <div className="button-sort">
                    <button className="btn-dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Sort by Player</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">1 Player</a>
                            <a class="dropdown-item" href="#">2 Players</a>
                            <a class="dropdown-item" href="#">3 Players</a>
                            <a class="dropdown-item" href="#">4+ Players</a>
                        </div>
                    <button>Sort by Genre</button>
                    <button>Sort by Rating</button>
                    <button>Sort by Console</button>
                </div>
            </div>
           
           
        </div>
    )
     
}
