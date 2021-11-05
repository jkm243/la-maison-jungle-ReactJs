import React from 'react'
import "../styles/cart.css"

function Cart() {
    return (
        <div className="cart">
            <h2>Panier</h2>
            <div className="cart-element">
                <ul>
                    <li>Monstera : 8</li>
                    <li>Monstera : 8</li>
                    <li>Monstera : 8</li>
                    <li>Monstera : 8</li>
                </ul>
            </div>
            <div className="cart-total">
                Total:33
            </div>
        </div>
    )
}

export default Cart
