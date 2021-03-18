import {useHistory} from 'react-router-dom'
import s from './style.module.css'
const GamePage = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <div className={s.root}>
            <h1>This is a Game page</h1>
            <button className="button" onClick={ handleClick }>
                return to Home page
            </button>
        </div>
    )
}

export default GamePage