import './styles/CartPopup.css'

import img from '../img/demigod-triko.jpeg'
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

function CartPopup() {
    return(
        <div className="cart-popup">
            
            <div className='cart-item'>
                <img src={img} alt="" />
                <div className='info'>
                    <p className='name'>Manipulate - Tričko</p>
                    <p className='detail'>Barva: Béžová</p>
                    <p className='detail'>Velikost: M</p>
                    <p className='price'>549 Kč</p>
                </div>
                <div className='remove'>
                    <CloseIcon className='icon'/>
                </div>
            </div>

            <div className='cart-item'>
                <img src={img} alt="" />
                <div className='info'>
                    <p className='name'>Manipulate - Tričko</p>
                    <p className='detail'>Barva: Béžová</p>
                    <p className='detail'>Velikost: M</p>
                    <p className='price'>549 Kč</p>
                </div>
                <div className='remove'>
                    <CloseIcon className='icon'/>
                </div>
            </div>

            <div className='cart-item'>
                <img src={img} alt="" />
                <div className='info'>
                    <p className='name'>Manipulate - Tričko</p>
                    <p className='detail'>Barva: Béžová</p>
                    <p className='detail'>Velikost: M</p>
                    <p className='price'>549 Kč</p>
                </div>
                <div className='remove'>
                    <CloseIcon className='icon'/>
                </div>
            </div>

            <div className='cart-item'>
                <img src={img} alt="" />
                <div className='info'>
                    <p className='name'>Manipulate - Tričko</p>
                    <p className='detail'>Barva: Béžová</p>
                    <p className='detail'>Velikost: M</p>
                    <p className='price'>549 Kč</p>
                </div>
                <div className='remove'>
                    <CloseIcon className='icon'/>
                </div>
            </div>

            <NavLink to={'/cart'}><button>Pokračovat do košíku</button></NavLink>

        </div>
    );
}

export default CartPopup;