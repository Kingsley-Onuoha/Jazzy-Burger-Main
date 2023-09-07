


const Header =()=>{
  return(
    <div className="header">
      <div className="left-side">
        <img className="logo" src="https://www.jazzysburger.com/static/media/logo.4fcd44a5965f8fef54b99869fb7124e5.svg" alt="logo" />
        <div className="location">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Lagos, Nigeria</h3>
        </div>
      </div>
      <div className="right-side">
        <div className="all-products">
          <i class="fa-solid fa-bell-concierge"></i>
          <h3>All Products</h3>
        </div>
        <div className="guests">
        <i class="fa-solid fa-user-tie"></i>
          <h3>Hi, Guest</h3>
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <div className="cart">
          <i class="fa-solid fa-bag-shopping"></i>
          <div className="order-number">
            <h3>0</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header