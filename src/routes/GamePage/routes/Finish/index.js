import {useContext} from 'react'
// import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";

const FinishPage = () => {
    const { pokemons } = useContext(PokemonContext)
    console.log('### finish pok:', pokemons);

    return (
        <h1>Finish page</h1>
    )
}
export default FinishPage