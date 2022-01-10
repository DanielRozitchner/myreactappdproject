
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { addDoc, collection, getFirestore, Timestamp, query, where, documentId, writeBatch, doc} from 'firebase/firestore'



function Cart() {

    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const { cartList, borrarCarrito, removeItem, totalPrice} = useCartContext([])

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const generarOrden = (e) =>{
        e.preventDefault()  
        
        
        // Nuevo objeto de orders    
        let orden = {}
        
        orden.date = Timestamp.fromDate(new Date())
        orden.buyer = dataForm
        orden.total = totalPrice();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const cake = cartItem.cake;
            const quant = cartItem.cantidad
            const price = cartItem.precio * cartItem.cantidad;

            
            return {id, cake, price, quant}   
        })

        // Generar la orden 
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })

    //actualizacion de stock

        const batch = writeBatch(db)
        
        orden.items.map(e=>{
                let docUpdate = doc(db, 'productos', e.id)
                let currentStock  = cartList.find(item => item.id === e.id).stock
                batch.update( docUpdate, {
                    stock: currentStock - e.quant
                })

            }) 
        batch.commit()



        }


    return (
        <> {!cartList.length ? <></> :
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Img</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Torta</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Eliminar</th>
                        
                    </tr>
                </thead>
                <tbody> 
                { cartList.map(prod =>
                <tr>
                    <td key= {prod.id}>
                        <img src={prod.foto} alt='' className='img-fluid' width= '10%' />
                    </td>
                <td>{prod.categoria}</td>
                <td>{prod.cake}</td>
                <td>{prod.cantidad}</td>
                <td>${prod.precio}</td>
                <td>${prod.precio * prod.cantidad}</td>
                <td><button onClick={()=> removeItem(prod.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></button></td>
                </tr> 
            )}
            </tbody>
        </table>
        }
            
             
            { !cartList.length ? (
                <div><h3>tu carrito esta vacio</h3>
                <Link to="/"><button className="btn btn-outline-primary btn-block">Seleccionar Productos</button></Link>
                </div>)
                :  (<div><h3>Total: ${totalPrice()}</h3></div>)}
                    
                <button className="btn btn-outline-primary btn-block"  disabled={!cartList.length} onClick={borrarCarrito}>Vaciar carrito</button>        
            
            
            <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button disabled={!cartList.length} >Generar Orden</button>
            </form>
            {idOrder.length !== 0 && <h3>Orden finalizada, comprobante numero: {idOrder}</h3>}
        </>
    )
}

export default Cart
