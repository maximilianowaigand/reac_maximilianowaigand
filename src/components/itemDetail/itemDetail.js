
import Couter from '../Couter/Couter'

const ItemDetail = ({id, name, price, img, stock, description }) => {

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }


    return (
        <div>
            <h2>{name}</h2>
            <img className="productimages" src={img} alt={name}/>
            <p>precio: $ {price}</p>
            <p>descripcion:{description}</p>
            <div>
                <Couter onnAdd={handleOnAdd} stock={stock} />
            </div>
            

        </div>
    )
    
}

export default ItemDetail