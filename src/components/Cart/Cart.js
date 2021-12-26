
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
            
        </>
    )
}

export default Cart
