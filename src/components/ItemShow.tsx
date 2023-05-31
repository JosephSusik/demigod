import { Link } from 'react-router-dom';
import './styles/ItemShow.css'

import img from '../img/demigod-triko.jpeg'

function ItemShow({text, link}:{text:string, link:string}) {
    return(
            <div className='item-show-item'>
                <Link to={link}>
                    <img src={img} alt="" />
                    <div className='text'>
                        <p>{text}</p>    
                    </div>
                </Link>
            </div>
    );
}

export default ItemShow;