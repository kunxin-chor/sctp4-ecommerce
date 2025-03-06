import { useCart } from "./CartStore";

export default function ShoppingCart() {
    const { cart, getCartTotal } = useCart();

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            <ul className="list-group">
                {
                    cart.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <img src={item.imageUrl}/>
                            <div>
                                <h5>{item.productName}</h5>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <span>
                                ${ item.price * item.quantity}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}