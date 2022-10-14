import cart from './assets/carrito.jpg'
import './CardWidget.css'


const CardWitget = () => {
    return (
        <div to='/cart' className="carrito">
         <img className="imagenCarrito" src={cart} alt='cart'/>
         0  

        </div>
    )
}

export default CardWitget