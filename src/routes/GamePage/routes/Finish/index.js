import {useContext, useState} from 'react'
import {PokemonContext} from "../../../../context/pokemonContext";
import {useHistory} from "react-router-dom";
import {FireBaseContext} from "../../../../context/firebaseContext";

import cn from 'classnames'
import PokemonCard from "../../../../components/PokemonCard";


import s from "./style.module.css";



const FinishPage = () => {
    const firebase = useContext(FireBaseContext)
    const history = useHistory()
    const { pokemons } = useContext(PokemonContext)
    const { opponent }  = useContext(PokemonContext)
    const [trophey, setTrophey] = useState(null)
    const [selected, setSelected] = useState(null)
    const { isWin } = useContext(PokemonContext)
    console.log('### context:',useContext(PokemonContext))
    console.log('### isWin:',isWin);
    if (Object.keys(pokemons).length === 0 && opponent.length === 0){
        history.replace('/game')
    }

    const handleToStartPage = () => {
        if (isWin){
            firebase.addPokemon(trophey, ()=>{
                history.replace('/game')
            })
        } else {
            // history.replace('/game')
            console.log('LOOOSE')
        }
    }

    if (opponent.length === 0 ){
        handleToStartPage()
    }

    return (
        <div>
            <div className={s.grid}>
                {
                    Object.values(pokemons).map((item) => (

                    <PokemonCard
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    id={item.id}
                    type={item.type}
                    values={item.values}
                    isActive
                    className={s.card}
                    />


                    ))
                }
            </div>
            <div className={s.buttonWrap}>
                <button className="button"
                        onClick={handleToStartPage}
                        disabled={false}
                >
                    End Game
                </button>
            </div>
            <div className={s.grid}>
                {
                    opponent.map((item) => (

                            <PokemonCard
                                key={item.id}
                                name={item.name}
                                img={item.img}
                                id={item.id}
                                type={item.type}
                                values={item.values}
                                isActive
                                className={cn(s.card, {[s.selected]: selected === item.id })}
                                onCardClick={() => {
                                    // if ( isWin ) {
                                        setSelected( item.id)
                                        setTrophey( prevState => item )
                                        console.log('WWW win?', isWin)
                                    // }
                                }}
                            />


                    ))
                }
            </div>

        </div>
    )
}
export default FinishPage