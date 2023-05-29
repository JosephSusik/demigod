import { Link } from 'react-router-dom';
import './styles/Navbar.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from "@mui/material/Badge";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

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
                <label className="switch">
                    <input type="checkbox" />
                </label>
                <PersonOutlineOutlinedIcon className='icon' />
                <Badge badgeContent={1} overlap="rectangular">
                    <ShoppingCartOutlinedIcon className='icon'/>{" "}
                </Badge>
            </div>
        </nav>
    );
}

export default Navbar;