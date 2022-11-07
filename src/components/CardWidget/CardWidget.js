import cart from './assets/carrito.jpg';
import './CardWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';


const CardWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    const navigate = useNavigate()



    return (
        <button to='/cart' className="carrito" onClick={() => navigate('/cart')}>
         <img className="imagenCarrito" src={cart} alt='cart-widget'/>
         {totalQuantity}  

        </button>
    )
}

export default CardWidget