import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Banner from "./src/components/Banner"


const AppLayout = ()=>{
  return(
    <div className="app">
      <Header />
      <Banner />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)