import React from 'react'
import { useCartContext } from "../../context/CartContext"

function PlaneForm({submitOrder, handler, formObj, errorsObj }) {

    const { cartList} = useCartContext([])

    return (
            <div>
            <form 
                onSubmit={submitOrder} 
                >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={formObj.name}
                    onChange={handler} 
                /><br />
                <p>{errorsObj.name}</p>
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={formObj.phone}
                    onChange={handler} 
                /><br/>
                <p>{errorsObj.phone}</p>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={formObj.email}
                    onChange={handler}
                /><br/>
                <p>{errorsObj.email}</p>
                <input
                    type='email'
                    name='emailVal'
                    placeholder='validar email'
                    value={formObj.emailVal}
                    onChange={handler}
                /><br/>
                <p>{errorsObj.emailVal}</p>
                <button disabled={!cartList.length} >Generar Orden</button>
            </form>
        </div>
    )
}

export default PlaneForm
