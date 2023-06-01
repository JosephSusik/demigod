import { NavLink } from 'react-router-dom';
import './styles/Navbar.css'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DarkModeSwitch from './DarkModeSwitch';
import ClickAwayListener from 'react-click-away-listener';

import img from '../img/demigod-icon.png'
import { useState } from 'react';
import LoginPopup from './LoginPopup';


function Navbar() {
    const [popup, setPopup] = useState(false)

    return(
        <nav>
            <div className='logo'>
                <NavLink to={"/"}><img src={img} alt="" /></NavLink>
            </div>
            <ul>
                <NavLink to={"/about"} className={({ isActive }) => (isActive? 'active':'')}><li>O nás</li></NavLink>
                <NavLink to={"/products"} className={({ isActive }) => (isActive? 'active':'')}><li>Produkty</li></NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive? 'active':'')}><li>Kontakt</li></NavLink>
            </ul>
            <div className='cart-btn'>
                <DarkModeSwitch />
                <div className='icon-wrapper' onClick={()=>setPopup(true)}>
                    <PersonOutlineOutlinedIcon className='icon'/>
                    {popup && (
                        <ClickAwayListener onClickAway={() => setPopup(false)}>
                                <div className={'popup'}>
                                    <LoginPopup />
                                </div>
                        </ClickAwayListener>
                    )}
                </div>
                <Badge badgeContent={1} overlap="rectangular">
                    <ShoppingCartOutlinedIcon className='icon'/>{" "}
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;