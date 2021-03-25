import {useContext} from 'react'
// import {useHistory} from 'react-router-dom'
import {PokemonContext} from "../../../../context/pokemonContext";
import s from "../Start/style.module.css";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from "react-router-dom";


const FinishPage = () => {
    const history = useHistory()
    const { pokemons } = useContext(PokemonContext)
    const { opponent }  = useContext(PokemonContext)

    const handleToStartPage = () => {
        history.replace('/game')
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
                                className={s.card}
                            />


                    ))
                }
            </div>

        </div>
    )
}
export default FinishPage