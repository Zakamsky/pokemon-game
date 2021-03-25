import {useState} from 'react'
import {
    useRouteMatch,
    Switch,
    Route
} from "react-router-dom"

import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'

import {PokemonContext} from '../../context/pokemonContext'



const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({})
    const [opponentsDeck, setOpponentsDeck] = useState([])
    const match = useRouteMatch()
    const handleSelectedPokemon = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState}
                delete copyState[key]
                return copyState
            }
            return {
                ...prevState,
                [key]: pokemon
            }
        })
    }
     const cleanSelectedPokemons = () => {
         setSelectedPokemons(prevState => {})
     }
    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            opponent: opponentsDeck,
            onSelectedPokemon: handleSelectedPokemon,
            onOpponent: setOpponentsDeck,
            cleanPokemonContext: cleanSelectedPokemons

        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    )
}

export default GamePage