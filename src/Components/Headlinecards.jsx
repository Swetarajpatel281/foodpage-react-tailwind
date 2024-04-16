
const Headlinecards = ()=>{
    return (
        <>
        <div className="max-w-[1640px] mx-auto py-12 p-4 grid sm:grid-cols-3 gap-6">
            {/* card */}
            <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">Spiecy Burger 
                 Teste it</p>
                <p className="px-2">Through 8/26</p>
                <button className=" bg-white text-black mx-2 absolute bottom-4 border-white rounded p-1">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
            src="https://images.pexels.com/photos/10922926/pexels-photo-10922926.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="/" />
            </div>
             {/* card */}
             <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4"> Special Desert</p>
                <p className="px-2">Tasty Foods</p>
                <button className=" bg-white text-black mx-2 absolute bottom-4 border-white rounded p-1">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/15010283/pexels-photo-15010283/free-photo-of-delicious-burgers-and-fries-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
             {/* card */}
             <div className="rounded-xl relative">
            {/* overlay */}
            <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
                <p className="font-bold text-2xl px-2 pt-4">New Restorant
                </p>
                <p className="px-2">Special Foods</p>
                <button className=" bg-white text-black mx-2 absolute bottom-4 border-white rounded p-1">Order Now</button>
            </div>
            <img className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl  "
            src="https://images.pexels.com/photos/8504685/pexels-photo-8504685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
        </>
    )
}
export default Headlinecards