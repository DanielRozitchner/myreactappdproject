import { Link } from 'react-router-dom';
import "./Item.css"

function Item({prod}) {
    return (
        <div className='col'>
                <div className="card w-100 mt-5" >
                    <div className="card-header d-flex flex-column align-items-center">
                        <h5>{prod.cake}</h5>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center justify-content-around">
                        <img src={prod.photo} alt='' className='img-fluid imgItem' />
                        <p>${prod.price}</p>
                    </div>
                    <div className="card-footer d-flex flex-column align-items-center">
                    <Link to={`/detail/${prod.id}`}>
                    <button className="btn btnItem btn-outline-primary btn-block">
                        Detalle
                    </button>
                    </Link>
                    </div>
                </div>
        </div>
    )
}

export default Item
