import {Link, Switch, Route} from "react-router-dom"
import Search from "./Search"
import Profile from "./Profile"
import Suggested from "./Suggested"


export default function Nav(props){
const games = props.games
const addGame = props.addGame
    return(

        <div>
            <nav>
            <Link to="/">Choose Game</Link>
            <Link to="/Suggested">My Favorites</Link>
            <Link to="/Profile">User Profile</Link>
            </nav>

            <Switch>
             <Route exact path="/" component={props => (
                 <Search {...props} games={games}/>)}></Route>
             <Route path="/suggested" component={props => (
                 <Suggested {...props} games={games}/>)}></Route>
             <Route path="/profile" component={props => (
                <Profile {...props} games={games} addGame={addGame()}/>)}></Route>
            </Switch>
            
            
        </div>
    )
}
