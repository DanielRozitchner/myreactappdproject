

const ItemDetail = ({item}) => {
    console.log("detail", item);
    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{item.cake}</h3>
            <h3>{item.precio}</h3>
            <img src={item.foto} alt={item.foto}></img>

            
        </div>
    )
}

export default ItemDetail

