import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resdata, setresdata] = useState([]);
  const [filtereddata, setfiltereddata] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("http://localhost:8080/food/");
    const json = await data.json();
    setresdata(json);
    setfiltereddata(json);
  };

  return resdata == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          type="text"
          className="input"
          value={searchBox}
          onChange={(e) => {
            setSearchBox(e.target.value);
          }}
        />
        <button
          className="filter"
          onClick={() => {
            const filtedlist = resdata.filter((resdata) => {
              return resdata.name
                .toLowerCase()
                .includes(searchBox.toLowerCase());
            });
            setfiltereddata(filtedlist);
          }}
        >
          Search
        </button>

        <button
          className="filter"
          onClick={() => {
            const filteredlist = resdata.filter(
              (resdata) => resdata.rating >= 4
            );
            console.log("top ratings called");
            setfiltereddata(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filtereddata.map((restaurant) => (
          <Link
            style={{ textDecoration: "none" }}
            to={"/restaurant/" + restaurant.id}
          >
            <RestaurantCard key={restaurant.id} resdata={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
