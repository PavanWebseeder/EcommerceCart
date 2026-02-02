import { useDispatch,useSelector } from "react-redux";
import { removeToCart } from "../features/cart/cartSlice";

const Cart = () =>{

    const { items } = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const total = items.reduce((sum,i)=> sum+i.price,0)

    return(
        <div className=" mt-9 max-w-4xl mx-auto p-6 shadow-2xl border border-gray-500">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {items.map(item=>(
                <div key={item.id} className="grid grid-cols-3 items-center bottom-3 pb-2 mb-3">
                    <span className="font-medium truncate">{item.title}</span>
                    <span className="text-right font-semibold">{item.price}</span>
                    <button
                    onClick={()=>dispatch(removeToCart(item.id))}
                    className="bg-red-500 text-white w-20 p-1 rounded-full ms-48">Remove</button>
                </div>
            ))}
            <h2 className="mt-4 font-semibold text-xl"> Total:₹{total}</h2>
        </div>
    );
}

export default Cart;