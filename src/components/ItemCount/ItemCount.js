import React, {useState} from 'react'
import "./ItemCount.css";

 const ItemCount = ({ stock, onAdd }) => {



    const [value, setValue] = useState(1)

    const handleAdd = () => {
        value !== stock && setValue(value + 1);
    }
    const handleSub = () => {
        value !== 0 && setValue(value - 1);
    }
    return (
            <div className='botones'>
                <button className='botonMenos' onClick={handleSub}>-</button>
                <span>{value}</span>
                <button className='botonMas' onClick={handleAdd}>+</button>
                <button disabled={value === 0} onClick={()=> onAdd(value)} className="btn btn-outline-primary btn-block Agregar">Agregar al carrito</button>
            </div>
    )
}


export default ItemCount