import {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'

import s from './style.module.css'
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";


const StartPage = () => {
    const history = useHistory()
    const firebase = useContext(FireBaseContext)
    const pokemonContext = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons)
        })

        return () => firebase.offPokemonSoket()
    }, [])


    const handleCardSelect = (key) => {
        const pokemon = {...pokemons[key]}
        pokemonContext.onSelectedPokemon(key, pokemon)
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const hadleStartGameClick = () => {
        history.push('/game/board')
    }
    return (
        <>
            <div className={s.buttonWrap}>
                <button className="button"
                        onClick={hadleStartGameClick}
                        disabled={Object.keys(pokemonContext.pokemons).length < 5}
                >
                    Start Game
                </button>
            </div>
            <div className={s.grid}>
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, selected}]) => <PokemonCard
                        key={key}
                        className={s.card}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={true}
                        isSelected={selected}
                        onCardClick={() => {
                            if ( Object.keys(pokemonContext.pokemons).length < 5 || selected ) {
                                console.log(pokemonContext.pokemons);
                                handleCardSelect(key)
                            }

                        }
                        }
                    />)
                }
            </div>
        </>
    )
}

export default StartPage