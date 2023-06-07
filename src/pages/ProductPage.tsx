import { useParams } from 'react-router-dom';
import './styles/ProductPage.css'

import img from '../img/demigod-triko.jpeg'
import DropDown from '../components/DropDown';
import { useState } from 'react';

function ProductPage() {
    //Product id
    let { id } = useParams();
    const [numberOfItems, setNumberOfItems] = useState(1);
    const [isBlack, setIsBlack] = useState(true)

    const optionsSize = [
        { value: "s", label: "S" },
        { value: "m", label: "M" },
        { value: "l", label: "L" },
        { value: "xl", label: "XL" },
    ];

    const decNumber = () => {
        numberOfItems <= 1? setNumberOfItems(1) : setNumberOfItems(numberOfItems-1);
    }

    const incNumber = () => {
        setNumberOfItems(numberOfItems+1);
    }
    
    
    return(
        <section className="product-page">
            <div className='top'>
                <div className='images'>
                    <img src={img} alt="" />
                    <p>carousel</p>
                </div>
                <div className='info'>
                    <p className='name'>Demigod - Mikina</p>
                    <p>Mikina s kapucí a klokaní kapsou, ve které se budeš u každé příležitosti cítit maximálně pohodlně.</p>
                    <p>Aby ti mikina co nejlépe seděla, před vybráním velikosti si překontroluj tabulku velikostí (najdeš ji níže v detailním popisku produktu)</p>
                    <p>Na fotkách je černá i bílá mikina velikosti XL</p>
                    <p>Model měří 173 cm a váží 93 kg.</p>
                    <div className='drp-dwn'>
                        <p>Barva:</p>
                        <div className='colors'>
                        <button className={isBlack?'active':''} 
                            onClick={()=>setIsBlack(true)}>Černá</button>
                        <button className={isBlack?'':'active'} 
                            onClick={()=>setIsBlack(false)}>Bílá</button>
                        </div>
                    </div>
                    <div className='drp-dwn'>
                        <p>Velikost:</p>
                        <DropDown placeHolder="Zvolte variantu" options={optionsSize}/>
                    </div>
                    

                    <p className='price'>1 149 Kč</p>

                    <div className='number-of-items'>
                        <p onClick={decNumber}
                            className='dec'
                        >-</p>
                        <p className='number'>{numberOfItems}</p>
                        <p onClick={incNumber}
                            className='inc'
                        >+</p>
                    </div>
                    <button className='cart-btn'>Přidat do košíku</button>


                </div>
            </div>
            <div className='bottom'>
                <p>DEBUG ID: {id}</p>
            </div>
        </section>
    );
}

export default ProductPage;