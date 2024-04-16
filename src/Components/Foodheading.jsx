const Foodheading = () => {
  return <>
  <div className="max-w-[1640px] mx-auto p-4">
    <div className="max-h-[700px] relative ">
        <div className="absolute w-full h-full text-gray-200 max-h-[700px] bg-black/35 flex flex-col justify-center">
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
            <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500">Foods <span className="text-gray-200">Delivered</span></h1>
        </div>
        <img className="w-full max-h-[700px]"
        src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

    </div>
  </div>
  </>;
};
export default Foodheading;
