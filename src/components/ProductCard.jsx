import { useState } from "react";
import ProductModel from './ProductModel';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const  ProductCard = ({product}) =>{

    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = (e) =>{
        e.stopPropagation();
        dispatch(addToCart(product));
        alert('Product Added to the Cart');
    }

    return(
        <>
            <div 
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={()=> setOpen(true)}>

                <img src={product.image}
                className="h-48 w-full object-cover rounded-t" 
                />

                <div className="p-4" >
                    <h2 className="font-semibold">{product.title}</h2>
                    <small className="mt-1">{product.category}</small>
                    <p className="text-gray-600">₹ {product.price}</p>
                    <button onClick={handleAddToCart}
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to Cart</button>        
                </div>
            </div>
            

            {open && (
                <ProductModel product={product}
                onClose={()=> setOpen(false)}
                />
            )}
        </>
    );
};


export default ProductCard;