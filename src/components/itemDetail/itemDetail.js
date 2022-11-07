
import Couter from '../Couter/Couter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../notification/ServiceNotification'

const ItemDetail = ({id, name, price,category, img, stock, description }) => {

    const { addItem, isInCart  } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        setNotification('success', 'se agrego correctamente ${quantity} ${name}')
    }

    


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
                { stock !== 0 ? <Couter onAdd={handleOnAdd} stock={stock} />: <p>No hay stock</p>}
            </div>
            

        </div>
    )
    
}

export default ItemDetail