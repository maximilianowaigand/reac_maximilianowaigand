
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import {db} from '../../service/firebase'
const ItemDetailConteiner = () => {
    const [product, setProduct] = useState ()
    const [loading, setLoading] = useState (true)


    const {productId} = useParams()
    

    useEffect(() => {

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdaped = { id: response.id, ...data}
            setProduct(productAdaped)
        }).finally(() => {
            setLoading(false)
        })
        
    },[productId])

    if (loading) {
        return <h1>cargando...</h1>
    }
    return (
        <> 
        <h1>Detalle del Producto</h1>
        <ItemDetail {...product}/>
        
        </>
    )
}

export default ItemDetailConteiner