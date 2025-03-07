import { useCart } from "./CartStore";

export default function ShoppingCart() {
    const { cart, getCartTotal, modifyQuantity, removeFromCart } = useCart();

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
                                <div className="d-flex align-items-center">
                    <button className="btn btn-sm btn-secondary me-2" onClick={() => modifyQuantity(item.product_id, item.quantity - 1)}>-</button>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <button className="btn btn-sm btn-secondary ms-2" onClick={() => modifyQuantity(item.product_id, item.quantity + 1)}>+</button>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => removeFromCart(item.product_id)}>Remove</button>
                  </div>
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