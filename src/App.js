import {
    useRouteMatch,
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



const App = () => {
    const match = useRouteMatch('/')
    const home = useRouteMatch('/home')
    const isHome = match.isExact || !!home

    return (
            <Switch>
                <Route path="/404" render={NotFound}/>
                <Route>
                    <>
                     <MenuHeader bgActive={!isHome} />
                     <div className={cn('pageWrapper', {'isHomePage': isHome})}>
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
    )

    // const [page, setPage] = useState('home')
    // const handleChangePage = (page) => {
    //     setPage(page)
    // }
    //     switch (page) {
    //         case 'home':
    //             return <HomePage onChangepage={ handleChangePage } />
    //         case 'game':
    //             return <GamePage  onChangepage={ handleChangePage }  />
    //         default:
    //             return <HomePage onChangepage={ handleChangePage } />
    //     }
}

export default App