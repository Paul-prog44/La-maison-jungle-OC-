import "../styles/Cart.css"

function Cart() {
    const Lierre = 10;
    const Bouquet = 15
    const Monstera = 23

    return <div className="lmj-cart">
                <h2>Panier</h2>
                <ul>
                    <li>Lierre</li>
                    <li>Bouquet</li>
                    <li>Monstera</li>
                </ul>
                <p>Total = {Lierre + Bouquet + Monstera}</p>
            </div>
}

export default Cart