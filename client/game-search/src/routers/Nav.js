import {Link, Switch, Route} from "react-router-dom"
import Search from "./Search"
import Profile from "./Profile"
import Suggested from "./Suggested"


export default function Nav(props){
const games = props.games
    return(

        <div>
            <nav>
            <Link to="/">Choose Filters</Link>
            <Link to="/Suggested">Suggested Games</Link>
            <Link to="/Profile">My Profile</Link>
            </nav>

            <Switch>
             <Route exact path="/" games={games} ><Search /></Route>
             <Route path="/suggested"><Suggested /></Route>
             <Route path="/profile" component={props => (
                <Profile {...props} games={games}/>)}></Route>
            </Switch>
            
            
        </div>
    )
}
