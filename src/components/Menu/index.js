import cn from 'classnames'
import {Link} from 'react-router-dom'
import s from './style.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '/home'
    },
    {
        title: 'GAME',
        to: '/game'
    },
    {
        title: 'ABOUT',
        to: '/about'
    },
    {
        title: 'CONTACT',
        to: '/contact'
    },
    {
        title: 'TEST',
        to: '/test'
    },

]

const Menu = ({ menuState, onMenu }) => {
    const handleMenuOpen = () => {
        onMenu && onMenu( !menuState)
    }

    return (
        <div className={cn(s.menuContainer, {
            [s.active]: menuState === true,
            [s.deactive]: menuState === false
        })}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}) =>
                            <li key={title}>
                                <Link to={to} onClick={handleMenuOpen}>
                                    {title}
                                </Link>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
}
export default Menu