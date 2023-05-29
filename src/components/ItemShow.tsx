import { Link } from 'react-router-dom';
import './styles/ItemShow.css'

function ItemShow({text, link}:{text:string, link:string}) {
    return(
            <div className='item-show-item'>
                <Link to={link}>
                    <p className='text'>{text}</p>
                </Link>
            </div>
    );
}

export default ItemShow;