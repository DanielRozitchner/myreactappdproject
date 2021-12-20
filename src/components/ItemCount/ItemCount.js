import React, {useState} from 'react'

 const ItemCount = ({ stock, onAdd }) => {



    const [value, setValue] = useState(1)

    const handleSuma = () => {
        value !== stock && setValue(value + 1);
    }
    const handleResta = () => {
        value !== 0 && setValue(value - 1);
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleSuma}>+</button>
            <button onClick={handleResta}>-</button>
            <button disabled={value === 0} onClick={()=> onAdd(value)}className="btn btn-outline-primary btn-block">Agregar al carrito</button>
        </div>
    )
}


export default ItemCount