import card from "../data";
import HouseCard from "../component/HouseCard";
import Navbar from "../component/Navbar";

const Favorite = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col items-center justify-center mt-20 gap-10 p-5">
        <div className="text-4xl  md:text-5xl font-bold text-center">Favorite Homes</div>
        <div className="flex flex-wrap w-full items-center justify-center  sm:justify-start">
          {card["all"]
            .filter((item) => item.is_liked === true)
            ?.map((item) => (
              <div key={item.id} className="w-[90%] sm:w-[32%] lg:w-[24%] p-2">
                <HouseCard item={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Favorite;
