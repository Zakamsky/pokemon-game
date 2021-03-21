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
        // console.log('### click', id)
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                    // console.log(item[0]);
                    // console.log(pokemon);
                    database.ref('pokemons/'+ item[0]).set({
                        ...pokemon
                    });
                };
                acc[item[0]] = pokemon;
                return acc;
            }, {});
        });

    }


    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
    }
    // console.log('### before click',pokemons);
    const randomPokemonKey = (pok) => {
        const pokKeys = Object.keys(pok)
        return pokKeys[getRandom(0,4)]

    }
    const getRandom = (min, max) => { return Math.round(Math.random() * (max - min)) + min }
    const handleAddPokemon = () => {
        const newKey = database.ref().child('pokemons').push().key;
        const oldKey = randomPokemonKey(pokemons)
        const newPok = {...pokemons}
        newPok[newKey] = {...pokemons[oldKey]}
        console.log(newPok)
        setPokemons(newPok)
        database.ref('pokemons/' + newKey).set({...pokemons[oldKey]});
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
                <button className="button" onClick={handleAddPokemon}>
                    Add pokemon
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