import React, { useContext, useState } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../shop/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Display from "../Components/Display/Display";

const ShopCategory = (props) => {
  const [noOfElement, setnoOfElement] = useState(4);
  const slice = data.carddata.slice(0, noOfElement);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  /*const { Product_ID } = useContext(ShopContext);*/
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {slice.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Display
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <button className="shopcategory-loadmore" onClick={() => loadMore()}>
        Explore More
      </button>
    </div>
  );
};
export default ShopCategory;
