import {useState} from 'react'

 const Couter = ({stock =0,initial =1,onAdd}) => {
    const [quantity, setQuantity] = useState (initial)


const Decrement = () => {
  if(quantity > 1){
    setQuantity(quantity - 1)
  }
}

const Increment = () => {
    if (quantity < stock) {
        setQuantity (quantity + 1)
    }
}    
return (

    <div>
        <div>
            <button onClick={Increment}>+</button>
            <div>{quantity}</div>
            <button onClick={Decrement}>-</button>
        </div>
    
        <div>
            <button onClick={() => onAdd(quantity)}>agregar al carrrito</button>
        </div>
      </div>
      )
}



export default Couter