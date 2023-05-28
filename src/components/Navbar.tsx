import './styles/Navbar.css'

function Navbar() {
    return(
        <nav>
            <div className='logo'>
                <a href='#'>logo</a>
            </div>
            <ul>
                <li>About us</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
            <div className='cart-btn'>
                <a href="#">cart</a>
            </div>
        </nav>
    );
}

export default Navbar;