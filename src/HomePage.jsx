import axios from "axios";
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react";

export default function HomePage() {

  const [featuredProducts, setFeaturedProducts] = useState([]);

  const fetchFeaturedProducts = async () => {
    // when referring to json files with axios
    // or if we are using <img src="">
    // React look for the file in the public
    const response = await axios.get('featured.json');
    setFeaturedProducts(response.data);
  }

  // an effect in React is any event that happens outside of React's control
  // React only has control over the DOM (Document Object Model) -- 
  // whatever that is within the browser window.

  // useEffect has two parameters
  // 1st parameter: the function to call (aka the effect function)
  // 2nd parameter: WHEN is the function called. In the array, we will
  // provide state variables -- if the state changes, then the function
  // 1st parameter will be called. If the array is EMPTY, then 
  // the effect function is called when the component renders for the first time
  // --> aka "mounted"
  useEffect(() => {
    // we need to call the function like this so because useEffect
    // doesn't support async functions
    fetchFeaturedProducts();
  }, []);

  const renderFeaturedProducts = () => {
    const jsx = [];

    for (let p of featuredProducts) {
      jsx.push(<div className="col-md-3 mb-4">
        <ProductCard
          key={p.id}
          imageUrl={p.image}
          productName={p.name}
          price={p.price}
        />
      </div>)
    }
    return jsx;
  }

  return (
    <main className="container my-5">
     
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {/* {renderFeaturedProducts()} */}
        {
          featuredProducts.map(p => (
            <div className="col-md-3 mb-4">
              <ProductCard
                key={p.id}
                imageUrl={p.image}
                productName={p.name}
                price={p.price}
              />
            </div>
          ))
        }
      </div>
    </main>
  )
}