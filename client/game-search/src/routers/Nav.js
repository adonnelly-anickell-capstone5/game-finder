import {Link, Switch, Route} from "react-router-dom"
import Search from "./Search"
import Profile from "./Profile"
import Favorites from "./Favorites"
import Suggested from "./Suggested"

export default function Nav(props){
const games = props.games
const setGames = props.setGames
const deleteGame = props.deleteGame
const faveGames = props.faveGames
const handleToggle = props.handleToggle

    return(

        <div>
            <nav>
            <Link to="/">Choose Game</Link>
            <Link to="/Favorites">My Favorites</Link>
            <Link to="/Profile">User Profile</Link>
            </nav>

            <Switch>
             <Route exact path="/" component={props => (
                 <Search {...props} games={games}/>)}></Route>
             <Route path="/favorites" component={props => (
                 <Favorites {...props} games={games} />)}></Route>
             <Route path="/profile" component={props => (
                <Profile {...props} games={games} setGames={setGames} deleteGame={deleteGame} handleToggle={handleToggle}/>)}></Route>
            </Switch>
            
            
        </div>
    )
}
