import './styles/ProductPreview.css'

import img from '../img/demigod-triko.jpeg'

function ProductPreview({name, price}:{name:string, price:number}) {
    return(
        <div className="product-preview">
            <img src={img} alt="" />
            <div className='item-info'>
                <p className='item-name'>{name}</p>
                <p className='item-price'>{price} Kč</p>
            </div>
        </div>
    );
}

export default ProductPreview;