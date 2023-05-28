import ItemShow from '../components/ItemShow';
import './styles/Homepage.css'

function Homepage() {
    return(
        <section className="homepage">
            <div className='header'>
                <p>HEADER</p>
            </div>
            <div className="items">
                <ItemShow />
                <ItemShow />
                <ItemShow />
            </div>
        </section>
    );
}

export default Homepage;