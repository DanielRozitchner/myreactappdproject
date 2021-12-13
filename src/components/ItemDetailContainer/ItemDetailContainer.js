import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../helpers/getFetch";
import  ItemDetail  from "../ItemDetail/ItemDetail"; 


const ItemDetailContainer = () => {
  const {id} = useParams();
    const [item, setItem] = useState({});
  

    useEffect(() => {
      getFetch
        .then(resp => setItem(resp.find(item => item.id === parseInt(id))))
        .catch(err => console.log(err))
    
    
    })
    console.log(id);
    console.log(item);
    return (
      <div>
        <ItemDetail item={item} /> 
        </div> 
      )
      //   getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
      // });
      // return (
      //   <div>
      //     <ItemDetail item={item} />
      //   </div>
      // );
       /* // key={item.id}
          //   className='col-md-4'
          //                               >
          //       <div className="card w-100 mt-5" >
          //           <div className="card-header">
          //               {`${item.cake}`}
          //           </div>
          //           <div className="card-body">
          //               <img src={item.foto} alt='' className='w-50' />
          //                   {item.detalle}
          //                   {`$${item.precio}`}
          //           </div>
          //           <div className="card-footer">
          //           <button className="btn btn-outline-primary btn-block">
          //             Agregar al Carrito
          //           </button>
                    
          //           </div>
          //       </div> */
  }
export default ItemDetailContainer
