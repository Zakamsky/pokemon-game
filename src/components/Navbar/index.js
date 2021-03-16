import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({ onMenu, menuState }) => {
    const handleMenuOpen = () => {
        onMenu && onMenu( !menuState)
    }
    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: menuState }, {[s.deactive]: !menuState })} onClick={handleMenuOpen}>
                    <span/>
                </a>
            </div>
        </nav>
    )
}
export default Navbar