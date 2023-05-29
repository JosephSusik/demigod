import ItemShow from '../components/ItemShow';
import './styles/Homepage.css'

function Homepage() {
    return(
        <section className="homepage">
            <div className='header'>
                <p>HEADER</p>
            </div>
            <div className="items">
                <ItemShow text='Mikiny' link='/all'/>
                <ItemShow text='Trička' link='/all'/>
            </div>
        </section>
    );
}

export default Homepage;