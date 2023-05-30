import ItemShow from '../components/ItemShow';
import './styles/Homepage.css'

function Homepage() {
    return(
        <section className="homepage">
            <div className='header'>
                <p>carousel</p>
            </div>
            <div className="items">
                <ItemShow text='Mikiny' link='/products'/>
                <ItemShow text='Trička' link='/products'/>
            </div>
        </section>
    );
}

export default Homepage;