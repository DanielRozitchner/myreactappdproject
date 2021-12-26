
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



function Cart() {

    const { cartList, borrarCarrito, removeItem, totalPrice} = useCartContext([])
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
                <td><button onClick={()=> removeItem(prod.id)}>eliminar</button></td>
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
            
        </>
    )
}

export default Cart
