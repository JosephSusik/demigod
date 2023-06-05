import { useParams } from 'react-router-dom';
import './styles/ProductPage.css'

import img from '../img/demigod-triko.jpeg'
import DropDown from '../components/DropDown';

function ProductPage() {
    //Product id
    let { id } = useParams();

    const options = [
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" },
        { value: "grey", label: "Grey" }
      ];
    
    
    return(
        <section className="product-page">
            <div className='top'>
                <div className='images'>
                    <img src={img} alt="" />
                </div>
                <div className='info'>
                    <p className='name'>NAME</p>
                    <p>Popis</p>
                    <p>Podivej se na sizing table</p>
                    <p>Jaká velikost je na fotkach</p>
                    <p>Jak moc thicc je model</p>

                    <p>BARVA</p>
                    <DropDown placeHolder="ZVOL NECO" options={options}/>
                    <p>VELIKOST</p>
                    <DropDown placeHolder="ZVOL NECO2" options={options}/>

                    <p>CENA</p>

                    <p>someother shit</p>

                    <p>NUMERB OF ITEMS</p>
                    <p>ADD TO CART</p>


                </div>
            </div>
            <div className='bottom'>
                <p>DEBUG ID: {id}</p>
            </div>
        </section>
    );
}

export default ProductPage;