import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import './styles/AllProducts.css'

function AllProducts() {
    return(
        <section className='all-products'>
            <Filters />
            <div className='show-products'>
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
                <ProductPreview />
            </div>
        </section>
    )
}

export default AllProducts;