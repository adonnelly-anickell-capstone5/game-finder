import {Link, Switch, Route} from "react-router-dom"
import Search from "./Search"
import Profile from "./Profile"
import Suggested from "./Suggested"

function Nav(){

    return(

        <div>
            <nav>
            <Link to="/Search">Search</Link>
            <Link to="/Suggested">Suggested</Link>
            <Link to="/Profile">Profile</Link>
            </nav>

            <Switch>
             <Route exact path="/" ><Search /></Route>
             <Route path="/suggested"><Suggested /></Route>
             <Route path="/profile"> <Profile /></Route>
            </Switch>
            
            
        </div>
    )
}

export default Nav