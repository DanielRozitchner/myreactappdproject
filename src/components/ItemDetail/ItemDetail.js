

function ItemDetail({ item }) {
  return (
    <div
      key={item.id}
            className='col-md-4'
                                        >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${item.cake}`}
                    </div>
                    <div className="card-body">
                        <img src={item.foto} alt='' className='w-50' />
                            {item.detalle}
                            {`$${item.precio}`}
                    </div>
                    <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                      Agregar al Carrito
                    </button>
                    
                    </div>
                </div>
    </div>
  )
}

export default ItemDetail
