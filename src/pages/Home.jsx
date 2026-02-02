import products from '../data/products.json';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters'; 

const Home = () => {

    const { category,maxPrice } = useSelector((state)=>state.filters);

    const filteredProducts = products.filter(p=>
        (!category || category === 'All' || p.category === category) && p.price <= maxPrice
    );
    console.log("All products:", products);
console.log("Category from redux:", category);
console.log("Filtered products:", filteredProducts);

    return(
        <div className='max-w-6xl mx-auto p-6'>
            <Filters/>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {filteredProducts.map(p=>(
                    <ProductCard key={p.id} product={p}/>
                ))}
            </div>
        </div>
    );
};

export default Home;