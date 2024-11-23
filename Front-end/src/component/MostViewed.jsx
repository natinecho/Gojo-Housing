import { Link } from "react-router-dom";
import HouseCard from "./HouseCard";

const MostViewed = ({ homes }) => {
  return (
    <>
      {/* <div className=" flex items-center justify-center"> */}
        <div className="flex flex-wrap items-center justify-center sm:items-start sm:justify-normal gap-5 m-4">
          {homes?.map((item) => (
            <div key={item.id} className="w-[85%] sm:w-[30%] lg:w-[23%]">
              <HouseCard item={item} />
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  );
};
export default MostViewed;
