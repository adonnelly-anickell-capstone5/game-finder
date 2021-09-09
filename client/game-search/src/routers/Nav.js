import {Link, Switch, Route} from "react-router-dom"
import Search from "./Search"
import Profile from "./Profile"
import Suggested from "./Suggested"


export default function Nav(){

    return(

        <div>
            <nav>
            <Link to="/">Choose Filters</Link>
            <Link to="/Suggested">Suggested Games</Link>
            <Link to="/Profile">My Profile</Link>
            </nav>

            <Switch>
             <Route exact path="/" ><Search /></Route>
             <Route path="/suggested"><Suggested /></Route>
             <Route path="/profile"> <Profile /></Route>
            </Switch>
            
            
        </div>
    )
}
