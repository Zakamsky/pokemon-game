import {
    useLocation,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import cn from 'classnames'

import HomePage from "./routes/HomePage";
import GamePage from "./routes/GamePage";
import AboutPage from "./routes/AboutPage";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import './App.css'
import NotFound from "./routes/NotFound";
import ContactPage from "./routes/ContactPage";

import {FireBaseContext} from "./context/firebaseContext";
import FirebaseClass from "./services/firebase";


const App = () => {
    const location = useLocation()
    const isFullPage = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/game/board'

    return (

        <FireBaseContext.Provider value={FirebaseClass}>
            <Switch>
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                     <MenuHeader bgActive={!isFullPage} />
                     <div className={cn('pageWrapper', {'isHomePage': isFullPage})}>
                         <Switch>
                             <Route path="/" exact component={HomePage}/>
                             <Route path="/home" component={HomePage}/>
                             <Route path="/game" component={GamePage}/>
                             <Route path="/about" component={AboutPage}/>
                             <Route path="/contact" component={ContactPage}/>
                             <Route render={()=> (
                                 <Redirect to="/404"/>
                             )}/>
                         </Switch>
                     </div>
                     <Footer/>
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>

    )
}

export default App