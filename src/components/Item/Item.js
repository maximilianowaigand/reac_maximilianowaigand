import { Link } from "react-router-dom";

const Item = ({id, name, img, price}) =>{

    return ( 
    <div>
        <h1>listado de productos</h1>

      
        
      <h2>{name}</h2>
      <img className="productimages" src={img} alt={name}/>
      <p>precio: $ {price}</p>
      <Link className="verdetalle" to={`/detail/${id}`}>ver detalle</Link>
</div>
    )

}

export default Item