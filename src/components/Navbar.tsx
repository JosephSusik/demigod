import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DarkModeSwitch from './DarkModeSwitch';

function Navbar() {
    return(
        <nav>
            <div className='logo'>
                <Link to={"/"}>logo</Link>
            </div>
            <ul>
                <li>About us</li>
                <Link to={"/all"}><li>Products</li></Link>
                <li>Contact</li>
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