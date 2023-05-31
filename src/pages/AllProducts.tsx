import Filters from '../components/Filters';
import ProductPreview from '../components/ProductPreview';
import './styles/AllProducts.css'

function AllProducts() {
    return(
        <section className='all-products'>
            <Filters />
            <div className='show-products'>
                <ProductPreview name='Name' price={12}/>
                <ProductPreview name='Future Wasted - Tričko' price={549}/>
                <ProductPreview name='Manipulate - Tričko' price={549}/>
                <ProductPreview name='Demigod - Tričko' price={549}/>
                <ProductPreview name='Timecatcher - Tričko' price={549}/>
            </div>
        </section>
    )
}

export default AllProducts;