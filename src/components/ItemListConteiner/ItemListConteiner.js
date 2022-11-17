import React , {useState, useEffect } from "react"
import './itemListConteiner.css'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { db } from '../../service/firebase'
import { getDocs, collection, query, where } from "firebase/firestore"



const ItemListConteiner = ({ greeting  }) => {

  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(true)

  const { categoryId} =useParams()
  

  useEffect(() => {
    setLoading(true)

    const collectionRef = categoryId 
    ? query(collection(db, 'products'),where('category', '==', categoryId))
    : collection (db, 'products' )

    getDocs(collectionRef).then(response => {
      const productsAdaped = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })
      setProducts(productsAdaped)
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