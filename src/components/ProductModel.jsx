import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductModel = ({product,onClose}) => {

    const dispatch = useDispatch();

    if(!product) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center
        justify-center z-50">

            <div className="bg-white rounded-lg w-full max-w-md p-6 relative animate-fadeIn">
                <button onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-black">Close</button>

                <img src={product.image}
                className="h-56 mt-5 w-full object-cover rounded">
                </img>

                <h2 className="text-xl font-bold mt-4">{product.title}</h2>

                <p className="text-gray-600 mt-1">{product.category}</p>

                <p>{product.description || "This is a Premium Quality Product"}</p>

                <p className="text-gray-800 mt-1">{product.price}</p>
                <button onClick={()=>dispatch(addToCart(product))}
                className="mt-5 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductModel;