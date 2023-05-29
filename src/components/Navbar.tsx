import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import Badge from "@mui/material/Badge";


function Navbar() {
    return(
        <nav>
            <div className='logo'>
                <Link to={"/"}><a href='#'>logo</a></Link>
            </div>
            <ul>
                <li>About us</li>
                <Link to={"/all"}><li>Products</li></Link>
                <li>Contact</li>
            </ul>
            <div className='cart-btn'>
                <Switch />
                <AccountCircleIcon className='icon'/>
                <Badge badgeContent={1} overlap="rectangular">
                    <ShoppingCartIcon className='icon'/>{" "}
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;