import { Link } from 'react-router-dom';

function Item({prod}) {
    return (
        <div
            key={prod.id}
            className='col'
                                        >
                <div className="card w-100 mt-5" >
                    <div className="card-header d-flex flex-column align-items-center">
                        <h5>{prod.cake}</h5>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        <img src={prod.photo} alt='' className='img-fluid' />
                    </div>
                    <div className="card-footer d-flex flex-column align-items-center">
                    <Link to={`/detail/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        Detalle
                    </button>
                    </Link>
                    </div>
                </div>
        </div>
    )
}

export default Item
