import { Home, NewPost, Profile } from '../Pages';
import { NavBar } from "../Components/NavBar/NavBar"
import { BrowserRouter as Router,Route} from 'react-router-dom';


export const DashboardRoutes = () => {
  return (
      <>
        <Router>
        <NavBar />
                <Route exact path="/profile" component={<Profile />} />
                <Route exact path="/home" component={<Home />} />
                <Route path="/newpost" component={<NewPost />} />
            
        </Router>
    </>
  )
}
