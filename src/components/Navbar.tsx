import { Link } from 'react-router-dom';
import './styles/Navbar.css'

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
                <a href="#">cart</a>
            </div>
        </nav>
    );
}

export default Navbar;