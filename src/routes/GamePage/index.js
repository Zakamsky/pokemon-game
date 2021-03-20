import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import database from "../../services/firebase";
import cn from 'classnames'

import s from './style.module.css'
import PokemonCard from "../../components/PokemonCard";

const GamePage = () => {

    const [pokemons, setPokemons] = useState({})

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, [])

    const handleCardClick = (id) => {
        console.log('### click', id)
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
        // const result = pokemons.map(el => el.id === id ? { ...el, active: !el.active } : el)
        // setPokemons(result);
    }


    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <>
            <div className={cn(s.root, 'pageWrapper')}>
                <h1>This is a Game page</h1>
                <button className="button" onClick={ handleClick }>
                    return to Home page
                </button>
            </div>
            <div className="flex">
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, active}]) => <PokemonCard
                        key={key}
                        name={name}
                        img={img}
                        id={id}
                        type={type}
                        values={values}
                        isActive={active}
                        onCardClick={handleCardClick}
                    />)
                }
            </div>
        </>
    )
}

export default GamePage