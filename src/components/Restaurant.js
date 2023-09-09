import React from "react"
import ReactDOM from "react-dom/client"
import { API } from "../utils/const"


const Restaurant = ()=>{
  return(
    <div className="restaurant">
      <img src="https://awa-apps.fra1.digitaloceanspaces.com/JJB/production/products/prod_7/file.jpg?X-Amz-Expires=600&X-Amz-Date=20230909T114802Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00PLPKAUE6K7RD3KCK%2F20230909%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=f87febdb50d24e2260d28fe08a2d9932f71b6cc47e4cb5db2758b71ea1d18427" alt="restaurant"/>
      <div className="details">
        <h2 className="title">Single Beef Burger</h2>
        <div className="cost">
          <div>
            <h4>Total Price</h4>
            <h3>₦ 9500</h3>
          </div>
          <div className="buttons">
            <button className="minus">-</button>
            <button className="number">1</button>
            <button className="plus">+</button>
          </div>
        </div>
        <button className="place-order"><i class="fa-solid fa-plus place-order-plus"></i>  Add To Cart</button>
      </div>
      <div className="heart">
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  )
}
export default Restaurant;