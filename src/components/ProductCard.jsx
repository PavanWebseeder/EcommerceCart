import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const  ProductCard = ({product}) =>{

    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart 🛒");
    };

    return(
        <div className="bg-white rounded-lg shadow hover:cursor-pointer hover:shadow-lg hover:border hover:border-gray-500 transition">
            <img src={product.image} 
            className="h-48 w-full object-cover rounded-t"></img>
            <div className="p-4">
                <h2 className="font-semibold">{product.title}</h2>
                <small>Category: {product.category}</small>
                <p className="text-gray-600">₹{product.price}</p>
                <button
                onClick={handleAddToCart}
                className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add To Cart</button>
            </div>
        </div>
    );
};


export default ProductCard;