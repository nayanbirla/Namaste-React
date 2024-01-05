import { useState } from "react";
import { reslist } from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [resdata, setresdata] = useState(reslist);
  return (
    <div className="body">
      <div>
        <button
          className="filter"
          onClick={() => {
            const filteredlist = resdata.filter(
              (resdata) => resdata.rating >= 4
            );
            setresdata(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resdata.map((restaurant, index) => (
          <RestaurantCard key={index} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
