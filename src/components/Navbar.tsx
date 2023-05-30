import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DarkModeSwitch from './DarkModeSwitch';

import img from '../img/demigod-icon.png'


function Navbar() {
    return(
        <nav>
            <div className='logo'>
                <Link to={"/"}><img src={img} alt="" /></Link>
            </div>
            <ul>
                <Link to={"/about"}><li>O nás</li></Link>
                <Link to={"/products"}><li>Produkty</li></Link>
                <Link to={"/contact"}><li>Kontakt</li></Link>
            </ul>
            <div className='cart-btn'>
                <DarkModeSwitch />
                <PersonOutlineOutlinedIcon className='icon' />
                <Badge badgeContent={1} overlap="rectangular">
                    <ShoppingCartOutlinedIcon className='icon'/>{" "}
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;