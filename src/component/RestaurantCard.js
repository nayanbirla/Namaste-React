import { CON_RES } from "../utils/constants";

const RestaurantCard = ({ resdata }) => {
  // const { resda } = resdata;
  return (
    <div className="res-card">
      <img className="res-logo" src={resdata.imageLink} alt="" />

      <h3>{resdata.name}</h3>
      <h4>{resdata.cuisines}</h4>
      <h4>Rating: {resdata.rating}</h4>
      <h4>Delivery Time: {resdata.deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
