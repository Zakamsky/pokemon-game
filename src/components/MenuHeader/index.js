import {useState} from 'react'
import Menu from "../Menu";
import Navbar from "../Navbar";

const MenuHeader = () => {
    const [isMenu, setMenu] = useState(null)
    const handleMenu = (menuState) => {
        setMenu(menuState)
    }
    return (
        <>
            <Menu menuState={isMenu}/>
            <Navbar onMenu={handleMenu} menuState={isMenu}/>
        </>
    )
}
export default MenuHeader