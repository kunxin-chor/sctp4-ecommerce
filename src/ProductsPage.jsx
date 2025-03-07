import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"
import { useCart } from "./CartStore";
import { useFlashMessage } from "./FlashMessageStore";
import { useLocation } from "wouter";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const {addToCart} = useCart();
    const {showMessage}= useFlashMessage();
    const [, setLocation] = useLocation();

    const handleAddToCart = (product) => {
         addToCart({
            id: Math.floor(Math.random()* 9999 + 1),
            product_id: product.id,
            productName: product.name,
            imageUrl: product.image,
            price: product.price,
            description: product.description
         });
         showMessage("Product added to shopping cart", "success");
         setLocation('/cart');

    }

    useEffect(() => {
        // create a function to load in the products.json
        const fetchProducts = async () => {
            try {

                const response = await axios.get('/products.json');
                setProducts(response.data);

            } catch (e) {
                console.error("Error fetching products", error);
            }
        }

        fetchProducts();


    }, [])

    return (
        <div className="container mt-5">
            <h1>Our Products</h1>
            <div className="row">
                {
                    products.map(p => (
                        <div key={p.id} className="col-md-4 mb-4">
                            <ProductCard
                                imageUrl={p.image}
                                productName={p.name}
                                price={p.price}
                                onAddToCart={()=>{
                                    handleAddToCart(p);
                                }}
                            />


                        </div>
                    ))
                }
            </div>
        </div>
    )
}