
import { useState, useEffect } from "react"
import  {getProductById}  from "../../asyncMock"
import ItemDetail from "../itemDetail/itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState ()
    const [loading, setLoading] = useState (true)


    const {productId} = useParams()
    

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)

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