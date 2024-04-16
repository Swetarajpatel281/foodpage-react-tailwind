import { AiOutlineMenu, AiFillTag, AiFillWallet } from "react-icons/ai";
import { AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
// import { AiFillHeart } from "react-icons/ai";
// import { AiFillWallet } from "react-icons/ai";
// import { AiFillTag } from "react-icons/ai";
import { MdHelp } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { useState } from "react";
const Foodpage = () => {
  const [navs, setNavs] = useState(false);
  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
        {/* left-side */}
        <div className="flex items-center">
          <div onClick={() => setNavs(!navs)} className="cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>

          <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
          <div className=" hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className="bg-black rounded-full text-white p-3 ">Category</p>
            <p className="p-2 ">Pick-up</p>
          </div>
        </div>
        {/* Search input */}
        <div className="flex bg-gray-200 rounded-full items-center px-2 w-[230px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={20} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search Here..."
          />
        </div>
        {/* Cart button */}
        <button className="bg-black text-white rounded-full p-1 md: flex items-center py-2">
          <BsFillCartFill size={30} className="mr-0.5" />
        </button>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {navs ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu  */}
      <div
        className={
          navs
            ? "fixed top-0  left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0  left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={20}
          onClick={() => setNavs(!navs)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-2 text-gray-800">
            <li className="text-xl py-2 flex p-1">
              <TbTruckDelivery size={30} className="mr-2" />
              Order
            </li>
            <li className="text-xl py-4 flex p-1">
              <AiFillHeart size={30} />
              Favorite
            </li>
            <li className="text-xl py-4 flex p-1">
              <AiFillWallet size={30} />
              wallet
            </li>
            <li className="text-xl py-4 flex p-1">
              <MdHelp size={30} />
              Help
            </li>
            <li className="text-xl py-4 flex p-1">
              <AiFillTag size={30} />
              Promotions
            </li>
            <li className="text-xl py-4 flex p-1">
              <BsFillSaveFill size={30} />
              Best One
            </li>
            <li className="text-xl py-4 flex p-1">
              <FaUserFriends size={30} />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Foodpage;
