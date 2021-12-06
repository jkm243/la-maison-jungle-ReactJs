import React from 'react'
import "../styles/cart.css"

function Cart() {
    return (
        <div className="cart">
            <h2>Panier</h2>
            <div className="cart-element">
                <ul>
                    <li>Monstera : 8</li>
                    <li>Rose : 5</li>
                    <li>Violette : 7</li>
                    <li>Tournesol : 40</li>
                </ul>
            </div>
            <div className="cart-total">
                Total:33
            </div>
        </div>
    )
}

export default Cart
