import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch,} from "firebase/firestore"
import { db } from "../../service/firebase/index"
import { NotificationContext } from "../notification/ServiceNotification"
import { useNavigate } from "react-router-dom"
import Form from "../form/form"

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)
    const {setNotification} = useContext(NotificationContext)

    const navigate = useNavigate()

    const [DataPersonal, setDataPersonal] = useState(false)
    const [dataclient, setDataClient] = useState({})

    const toCompleteData = (name, surname, address, phone, email) =>{
        setDataClient({name, surname, address, phone, email})
        setDataPersonal(true)
    }

    const createOrden = async () => {
        setLoading(true)
        try {
            const objOrden = {

                buyer:dataclient,
                items: cart,
                total: total
                }
        
                
                const batch = writeBatch(db)

                const outOfStock = []
        
                const ids = cart.map(prod => prod.id)
        
                const productRef = collection(db, 'products')
        
                const productsAddedFirestore = await getDocs(query(productRef, where(documentId(), 'in',ids)))

                const { docs} = productsAddedFirestore

                docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const stockdb = dataDoc.stock

                    const productAddedCart = cart.find(prod => prod.id === doc.id)

                    const productQuantity = productAddedCart.quantity

                    if(stockdb >= productQuantity) {
                        batch.update(doc.ref, {stock: stockdb - productQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })

                if(outOfStock.length === 0) {
                    await batch.commit()

                    const orderRef = collection(db, 'orders')

                    const orderAdded = await addDoc(orderRef, objOrden )

                    clearCart()

                    setTimeout(() =>{
                        navigate('/')

                    },3000)

                    setNotification('success', 'El id de tu orden es: ${orderAdded.id}')
                } else {
                    setNotification('error', 'hay productos que estan fuera de stock' )

                }


        }catch (error) {
            setNotification('error', 'se produjo un error. vuelva a intertarlo')
        } finally {
            setLoading(false)
        }
    }



    

    if(loading) {
        return <h1> su orden se esta cargando...</h1>
    }

    

    return (
        <div>
            <h1>checkout</h1>
            <Form toCompleteData={toCompleteData} />

            { DataPersonal ?<button onClick={createOrden}>generar orden</button> : ""}
            
        </div>
    )



    }

export default Checkout