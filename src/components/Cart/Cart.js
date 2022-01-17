
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { addDoc, collection, getFirestore, Timestamp, query, where, documentId, writeBatch, doc} from 'firebase/firestore'



function Cart() {
    

    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", emailVal:"", phone:""
    })
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const { cartList, removeCart, removeItem, totalPrice} = useCartContext([])

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const validate = (values) => {
        const errors = {}
        const regexMail = /^[^\s@]+@[^\@]+\.[^\s@]{2,}$/i;
        const regexPhone = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
        const regexName = /^[a-z ,.'-]+$/i;
        if (!values.name) {
            errors.name = "El nombre es requerido!";
        } else if (!regexName.test(values.name)){
            errors.name = "El nombre no es valido"
        }
        if (!values.email) {
            errors.email = "El email es requerido!";
        } else if (!regexMail.test(values.email)){
            errors.email = "El email no es valido!"
        }
        if (!values.emailVal) {
            errors.emailVal = "El email es requerido!";
        } else if (values.email !== values.emailVal){
            errors.emailVal = "El email no coincide con el campo correspondiente!"
        }
        if (!values.phone) {
            errors.phone = "El telefono es requerido!";
        } else if (!regexPhone.test(values.phone)) {
            errors.phone = "El Telefono no es valido"
        }  
        return errors;

    }

    const generateOrder = (e) =>{
        e.preventDefault() 
        let errors = validate(dataForm)
        setFormErrors(errors) 
        let isSubmit = (true)
        
        
        // Nuevo objeto de orders
        if (Object.keys(errors).length === 0 && isSubmit){    
        let order = {}
        
        order.date = Timestamp.fromDate(new Date())
        order.buyer = dataForm
        order.total = totalPrice();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const cake = cartItem.cake;
            const quant = cartItem.quantity
            const price = cartItem.price * cartItem.quantity;

            
            return {id, cake, price, quant}   
        })

        // Generar la orden 
        const db = getFirestore()
        const orderColeccion = collection(db, 'orders')
        addDoc(orderColeccion, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            removeCart()
            setDataForm({
                name:"", email:"", emailVal:"", phone:""
            })
        })

    //actualizacion de stock

        const batch = writeBatch(db)
        
        order.items.map(e=>{
                let docUpdate = doc(db, 'products', e.id)
                let currentStock  = cartList.find(item => item.id === e.id).stock
                batch.update( docUpdate, {
                    stock: currentStock - e.quant
                })

            }) 
        batch.commit()



        }
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
                        <img src={prod.photo} alt='' className='img-fluid' width= '10%' />
                    </td>
                <td>{prod.category}</td>
                <td>{prod.cake}</td>
                <td>{prod.quantity}</td>
                <td>${prod.price}</td>
                <td>${prod.price * prod.quantity}</td>
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
                    
                <button className="btn btn-outline-primary btn-block"  disabled={!cartList.length} onClick={removeCart}>Vaciar carrito</button>        
            
        
            <form 
                onSubmit={generateOrder} 
                
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                    onChange={handleChange} 
                /><br />
                <p>{formErrors.name}</p>
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                    onChange={handleChange} 
                /><br/>
                <p>{formErrors.phone}</p>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                    onChange={handleChange}
                /><br/>
                <p>{formErrors.email}</p>
                <input
                    type='email'
                    name='emailVal'
                    placeholder='validar email'
                    value={dataForm.emailVal}
                    onChange={handleChange}
                /><br/>
                <p>{formErrors.emailVal}</p>
                <button disabled={!cartList.length} >Generar Orden</button>
            </form>
           {idOrder.length !== 0 && <h3>Orden finalizada, comprobante numero: {idOrder}</h3>}
        </>
    )
}

export default Cart
 