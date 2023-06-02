import './styles/CartPopup.css'

import img from '../img/demigod-triko.jpeg'


function CartPopup() {
    return(
        <div className="cart-popup">
            <div className='cart-item'>
                <img src={img} alt="" />
                <div className='info'>
                    <p className='name'>Manipulate - Tričko</p>
                    <div>
                        <p className='detail'>Barva: Béžová
                        <p className='detail'>Velikost: M</p></p>
                    </div>
                    <p className='price'>549 Kč</p>
                </div>
                <div className='remove'>
                    x
                </div>
            </div>
            <button>Přejít do košíku</button>
        </div>
    );
}

export default CartPopup;