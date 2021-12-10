
const ItemDetail = ({ item }) => {
    console.log("El item", item);
    console.log(item[0].precio)
    return (
      <div className="card">
        <h3>ItemDetail</h3>
        <h3>{item[0].cake}</h3>
        <p>{item[0].precio}</p>
        <img src={item[0].foto} alt={item[0].foto}></img> 
    </div>
    );
  };
  export default ItemDetail;