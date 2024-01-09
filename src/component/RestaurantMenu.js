import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resdata, setresdata] = useState([]);
  const [filresdata, setfilresdata] = useState([]);
  const [isVeg, setIsVeg] = useState(false);
  const { resId } = useParams();
  useEffect(() => {
    fetchresdata();
  }, []);

  const fetchresdata = async () => {
    const data = await fetch("http://localhost:8080/food/" + resId);
    const json = await data.json();
    setresdata(json);
    setfilresdata(json.res);
  };

  const handleToggle = () => {
    setIsVeg(!isVeg);
    console.log(filresdata);
    if (!isVeg) {
      const filter = filresdata.filter((data) => {
        console.log(data.type.toLowerCase());
        return data.type.toLowerCase() === "veg";
      });
      console.log(filter);
      setfilresdata(filter);
    } else {
      setfilresdata(resdata.res);
    }
  };

  if (resdata.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="header1">
        <div className="restaurant-name">{resdata.name}</div>
        <img src={resdata.imageLink} alt="Restaurant Image" width="150" />
        <div className="cuisines-rating">
          {resdata.cuisines.map((data) => (
            <div className="cuisine">{data}</div>
          ))}
          <div className="rating">
            <span>Rating:</span>
            <div className="rating-value">{resdata.rating}</div>
          </div>
        </div>
        <div className="delivery-time">
          Estimated Delivery Time: {resdata.deliveryTime}
        </div>
      </div>

      <div className="menu-container">
        <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" checked={isVeg} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span>{isVeg ? "Veg" : "Non Veg"}</span>
        </div>

        {filresdata.map((dish) => (
          <div className="dish" key={dish.id}>
            <div className="dish-info">
              <div className="dish-name">{dish.dishname}</div>
              <div className="dish-type">{dish.type}</div>
              <div className="dish-description">{dish.description}</div>
            </div>
            <div className="dish-price">Rs {dish.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
