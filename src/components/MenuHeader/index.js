import {useState} from 'react'
import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = ({ bgActive = false }) => {
    const [isMenu, setMenu] = useState(null)
    const handleMenu = (menuState) => {
        setMenu(menuState)
    }
    return (
        <>
            <Menu menuState={isMenu} onMenu={handleMenu}/>
            <Navbar onMenu={handleMenu} menuState={isMenu} bgActive={bgActive} />
        </>
    )
}
export default MenuHeader