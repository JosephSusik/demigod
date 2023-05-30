import './styles/ProductPreview.css'

import img from '../img/demigod-triko.jpeg'


function ProductPreview() {
    return(
        <div className="product-preview">
            <img src={img} alt="" />
            <p>Item name</p>
            <p>Price</p>
        </div>
    );
}

export default ProductPreview;