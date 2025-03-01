
import Header from "./Header"
import ProductCard from "./ProductCard"
import "./styles.css"

import { useState } from "react"

export default function App() {

  // state variable are created before the `return` and
  // not within the JSX
  const [showNavBar, setShowNavBar] = useState(false);

  const showNavBarOrNot = () => {
    if (showNavBar) {
      return "show"
    } else {
      return "";
    }
  }


  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">E-Shop</a>
        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>{
            // toggle showNavBar 
            // if true, set to false.
            // if false, set to true.
            if (showNavBar) {
              setShowNavBar(false)
            } else {
              setShowNavBar(true)
            }

            // setShowNavBar(!showNavBar)

          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* The nav menu */}
        <div className={`collapse navbar-collapse ${showNavBarOrNot()}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Header/>

    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductCard
             imageUrl="https://picsum.photos/id/20/300/200"
             productName="Product 1"
             price={19.99}
          
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/1/300/200"
            productName="Product 2"
            price={39.99}
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/26/300/200"
            productName="Product 3"
            price={100.99}
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/96/300/200"
            productName="Product 4"
            price={79.99}
          />
        </div>
      </div>
    </main>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>)
}