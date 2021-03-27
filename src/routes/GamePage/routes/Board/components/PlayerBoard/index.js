import {useState} from 'react'
import cn from 'classnames'
import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";

const PlayerBoard = ({player, cards, side, onClickCard}) => {
    const [isSelected, setSelected] = useState(null)
    return (
        <>
            {
                cards.map((item) => (
                    <div
                        key={item.id}
                        className={cn(s.cardBoard, s[side], {
                        [s.selected]: isSelected === item.id
                    })}
                    onClick={() => {
                        setSelected(item.id)
                        onClickCard && onClickCard({
                            player,
                            ...item,
                        })
                    }}
                    >
                        <PokemonCard
                            // key={id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                        />
                    </div>

                ))
            }
        </>
    )
}

export default PlayerBoard