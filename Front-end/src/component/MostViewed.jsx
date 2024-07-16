import {Link } from "react-router-dom";

const MostViewed =({homes})=>{

    return (
        <>
        <div className="flex flex-wrap gap-10 m-4">
        {homes.map((item) => (
          
          <div
            key={item.id}
            className="w-[30%] flex flex-col items-center justify-around bg-[#374dcb4a] rounded-lg shadow-lg "
          >
          <Link to={`/property_detail?id=${item.id}`}>
            <div className="flex flex-col items-start  justify-between items-between">
              <img src={item.cover_image} alt="image_" className="h-[300px]"/>
                <h3 className="text-black  font-bold text-xl ">
                  {item.title}
                </h3>
                <div className="space-x-4 items-center">
                  <h3 className="text-black font-bold">{item.price}</h3>
                </div>
                <div>
                  <h3 className="text-2xs">{item.location}</h3>
                </div>
            </div>
        </Link>
          </div>
        ))}
        </div>
        </>
    )
}
export default MostViewed;