import cn from 'classnames'
import s from './style.module.css'

const Navbar = ({ onMenu, menuState, bgActive }) => {
    const handleMenuOpen = () => {
        onMenu && onMenu( !menuState)
    }
    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <button className={cn(s.menuButton, {[s.active]: menuState === true, [s.deactive]: menuState === false })} onClick={handleMenuOpen}>
                    <span/>
                </button>
            </div>
        </nav>
    )
}
export default Navbar