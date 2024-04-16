
 import {data} from '../Data/data.js'
import { useState } from "react";
const Foodlists = () => {
  const [food,setFood]= useState(data)
  // fiter type burger/pizza/etc
  console.log(data)
  const filterType = (category)=>{
    setFood(
     data.filter((item) =>{
      return item.category === category;
     })
   );
  };
  const filterprice = (price) => {
    setFood(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }
  return (
    <>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-orange-600 font-bold text-4xl text-center">
          Top Rated Menu Items
        </h1>
        {/* filter Row */}
        <div>
          {/* filter type */}
          <div>
            <p className="font-bold text-gray-700">Filter Type</p>
          </div>
          <div className="flex justify-between max-w-[490px] w-full">
            <button  
           onClick={()=>setFood(data)}
             className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
              All
            </button>
            <button 
           onClick={()=>filterType('burger')}
             className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border rounded-xl border-orange-500 hover:border-transparent">
              Burger
            </button>
            <button 
            onClick={()=>filterType('pizza')} 
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
              Pizza
            </button>
            <button 
            onClick={()=>filterType('salad')} 
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
              Salads
            </button>
            <button
             onClick={()=>filterType('Chicken')}
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
              Chicken
            </button>
          </div>
          {/* filter price  */}
          <div >
            <p className="font-bold text-gray-700">Filter Price</p>
            <div className=" flex justify-between max-w-[290px] w-full">
              <button 
              onClick={()=>filterprice('$')} 
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
                $
              </button>
              <button
               onClick={()=>filterprice('$$')} 
               className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
                $$
              </button>
              <button 
               onClick={()=>filterprice('$$$')} 
              className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
                $$$
              </button>
              <button
               onClick={()=>filterprice('$$$$')} 
               className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-xl">
                $$$$
              </button>
            </div>
          </div>
        </div>
        {/* display fodds  */}
        <div className='grid grid-cols-2 lg:id-cols-4 gap-6 pt-4'>
       {food.map((item,index) =>(
         <div key= {index} className='border shadow-lg rounded-lg haver:scale-10s duration-300'>
          <img src={item.image} alt={item.name} 
          className='w-full h-[200px] object-cover rounded-t-lg'
          />
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold'>{item.name}</p>
            <p>
              <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
            </p>
          </div>
         </div>
       ))}
        </div>
      </div>
    </>
  );
};
export default Foodlists;
