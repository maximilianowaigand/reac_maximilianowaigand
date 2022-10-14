import React , {useState, useEffect } from "react"
import {getProduct, getProductsByCategory} from "../../asyncMock"
import './itemListConteiner.css'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"



const ItemListConteiner = ({ greeting  }) => {

  const [products, setproductos] = useState ([])
  const [loading, setLoading] = useState(true)

  const { categoryId} =useParams()

  useEffect(() => {
    setLoading(true)

    const asyncFuncion = categoryId ? getProductsByCategory : getProduct
    
    asyncFuncion(categoryId).then(response => {
      setproductos(response)

    }).finally(()=> {
      setLoading(false)
    })
  


},[categoryId])


if (loading) {
  return <h1> <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button></h1>
}


  
  return (
  <div>
    <ItemList products={products}  />
      
      </div>
      
    )
}

export default ItemListConteiner