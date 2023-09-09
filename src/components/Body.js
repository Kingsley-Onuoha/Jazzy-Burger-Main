import React from "react"
import ReactDOM from "react-dom/client"
import Restaurant from "./Restaurant"


const Body = ()=>{
  return(
    <div main-body>
      <div className="body">
        <div className="left">
          <img src="https://www.jazzysburger.com/static/media/sidebanner.3456c9608105b7e48b54.jpg" alt="advert" />
        </div>
        <div className="right">
          <Restaurant />
        </div>
      </div>
      <div className="see-more">
        <button >see more...</button>
      </div>
    </div>
  )
}
export default Body;