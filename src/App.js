import {useState} from 'react'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";

import './App.css'

const App = () => {
    const [page, setPage] = useState('home')
    const handleChangePage = (page) => {
        setPage(page)
    }
        switch (page) {
            case 'home':
                return <HomePage onChangepage={ handleChangePage } />
            case 'game':
                return <GamePage  onReturn={ handleChangePage }  />
            default:
                return <HomePage onChangepage={ handleChangePage } />
        }
}

export default App