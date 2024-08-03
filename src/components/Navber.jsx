import { LoveIcon, SearchIcon, ShopIcon } from "@/icons/Icons";
import { navberData } from "./data/NavberData";

const Navber = () => {
  return (
<div>
<div className="mt-10 flex items-center gap-[168px] w-[1170px] mx-auto">
      <div className="flex items-center gap-[190px]">
        <h1 className="text-2xl font-bold leading-6">Exclusive</h1>
        <ul className="flex items-center gap-12 leading-6">
          {navberData?.map((menu, index) => (
            <li key={index} className="cursor-pointer">
              {menu?.title}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] h-[38px] w-[243px] pl-5 pr-10 outline-none rounded text-xs leading-[18px] "
          />
          <div className="absolute top-[7px] right-3 cursor-pointer">
            <SearchIcon />
          </div>
        </div>
        <button className="ml-6 mr-4  ">
          <LoveIcon />
        </button>
        <button >
          <ShopIcon />
        </button>
      </div>
    </div>
    <div className="border-b mt-4">

    </div>
</div>
  );
};

export default Navber;
