import { useState } from 'react';
import './styles/Filters.css'

function Filters() {
    const [tshirts, setTshirts] = useState(false);
    const [sweatshirts, setSweatshirts] = useState(false);
    const [all, setAll] = useState(true);

    const [expensive, setExpensive] = useState(false);
    const [cheap, setCheap] = useState(false);
    const [allPrice, setAllprice] = useState(true);

    const addActive = (item:string) => {
        if(item === "tshirts") {
            setTshirts(true);
            setSweatshirts(false);
            setAll(false);
        } else if (item === "sweatshirts") {
            setTshirts(false);
            setSweatshirts(true);
            setAll(false);
        } else {
            setTshirts(false);
            setSweatshirts(false);
            setAll(true);
        }
    }

    const addActive2 = (item:string) => {
        if(item === "expensive") {
            setExpensive(true);
            setCheap(false);
            setAllprice(false);
        } else if (item === "cheap") {
            setExpensive(false);
            setCheap(true);
            setAllprice(false);
        } else {
            setExpensive(false);
            setCheap(false);
            setAllprice(true);
        }
    }

    return(
        <div className='filters'>
            <div className='filter'>
                <button className={tshirts?'active':''} 
                onClick={()=>addActive("tshirts")}>Trička</button>
                <p>|</p>
                <button className={sweatshirts?'active':''} 
                onClick={()=>addActive("sweatshirts")}>Mikiny</button>
                <p>|</p>
                <button className={all?'active':''} 
                onClick={()=>addActive("all")}>Vše</button>
            </div>
            <div className='filter'>
                <button className={expensive?'active':''} 
                onClick={()=>addActive2("expensive")}>Nejdražší</button>
                <p>|</p>
                <button className={cheap?'active':''} 
                onClick={()=>addActive2("cheap")}>Nejlevnější</button>
                <p>|</p>
                <button className={allPrice?'active':''} 
                onClick={()=>addActive2("all")}>Abecedně</button>
            </div>
        </div>
    );
}

export default Filters;