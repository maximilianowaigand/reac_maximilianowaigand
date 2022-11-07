import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({id, name, quantity, price}) => {

    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <article>
            <header>
                <h3>{name}</h3>
            </header>
            <section>
                <p> cantidad: {quantity}</p>
                <p> precio x unidad: ${price}</p>
            </section>
            <footer> 
                <p> subtotal: ${price * quantity}</p>

                <button onClick={() => handleRemove(id)}>x</button>
            </footer>
        </article>
    )
}

export default CartItem