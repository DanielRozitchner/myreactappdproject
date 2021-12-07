import React, {useState} from 'react'

 const ItemCount = ({max, inicial}) => {



    const [value, setValue] = useState(inicial)

    const handleSuma = () => {
        value < max ?
        setValue(prev => prev + 1) : alert('compra maxima')
    }
    const handleResta = () => {
        value > inicial ?
        setValue(prev => prev - 1) : alert('compra minima')
    }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={handleSuma}>+</button>
            <button onClick={handleResta}>-</button>
        </div>
    )
}


export default ItemCount