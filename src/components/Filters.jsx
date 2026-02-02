import { useDispatch } from "react-redux";
import { setCategory,setMaxPrice } from "../features/filters/filtersSlice";
import  products  from '../data/products.json';
import { useState } from "react";

const Filters = () =>{

    const dispatch = useDispatch();
    const [price,setPrice] = useState('');
    const categories = ['All',...new Set(products.map((p)=>p.category))]

    const applyPriceFilter = () => {
    if (price === "") {
      dispatch(setMaxPrice(10000)); 
    } else {
      dispatch(setMaxPrice(Number(price)));
    }
  };

    return(
        <div className="bg-white p-4 rounded shadow mb-6 flex gap-4">
            
            {/* Category Filter */}

            <select
            className="border p-2 rounded"
            onChange={(e)=>dispatch(setCategory(e.target.value))}>
                {categories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            
            {/* Price Filter */}

            <input type='number' max={10000} className="w-full focus:bg-gray-50" placeholder="Enter Price"
            value={price} onChange={(e)=>{setPrice(e.target.value); dispatch(setMaxPrice(Number(e.target.value)))}}
            />
            <button type="submit" className="bg-blue-400 text-white rounded-md p-3"
            onClick={(e)=>dispatch(setMaxPrice(Number(price)))}>Apply</button>
        </div>
    );
}

export default Filters;