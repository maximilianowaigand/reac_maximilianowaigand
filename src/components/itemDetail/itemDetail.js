
import Couter from '../Couter/Couter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../notification/ServiceNotification'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, price,category, img, stock, description }) => {

    const { addItem, isInCart, getProductQuantity  } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, 
        }

        addItem(productToAdd,quantity)
        setNotification('success', `se agrego correctamente ${quantity} ${name}`)
    }

    const quantityAdded = getProductQuantity(id)


    return (
        <div>
            <h2>{name}</h2>
            <img className="productimages" src={img} alt={name}/>
            <section>
                <p> categoria: { category }</p>
                <p>precio: $ {price}</p>
                <p>descripcion:{description}</p>
            </section>
            <div>
                { stock !== 0 ? <Couter onAdd={handleOnAdd} stock={stock} inicial={quantityAdded}/>: <p>No hay stock</p>}
                { isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'blue'}}>Finalizar compra</Link> }
            </div>
            

        </div>
    )
    
}

export default ItemDetail