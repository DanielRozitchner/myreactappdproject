import "./PlaneForm.css"

function PlaneForm({submitOrder, handler, formObj, errorsObj, cartOrder }) {
    
    return (
            <div className="formDiv">
            <form 
                onSubmit={submitOrder} 
                >
                <div className="form">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="groupForm">
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='Nombre' 
                                value={formObj.name}
                                onChange={handler} 
                            />
                            <span className="bar"></span>
                        </div>
                        <p className="p">{errorsObj.name}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="groupForm">
                            <input 
                                type='text' 
                                name='lastname' 
                                placeholder='Apellido' 
                                value={formObj.lastname}
                                onChange={handler} 
                            />
                            <span className="bar"></span>
                        </div>
                        <p className="p">{errorsObj.lastname}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="groupForm">
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='Tel' 
                                value={formObj.phone}
                                onChange={handler} 
                            />
                            <span className="bar"></span>
                        </div>
                        <p className="p">{errorsObj.phone}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="groupForm">
                            <input 
                                type='email' 
                                name='email'
                                placeholder='Email' 
                                value={formObj.email}
                                onChange={handler}
                            />
                            <span className="bar"></span>
                        </div>
                        <p className="p">{errorsObj.email}</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="groupForm">
                            <input
                                type='email'
                                name='emailVal'
                                placeholder='Validar email'
                                value={formObj.emailVal}
                                onChange={handler}
                            />
                            <span className="bar"></span>
                        </div>    
                        <p className="p">{errorsObj.emailVal}</p>
                    </div>
                    <button className="buttonForm btn btnItem btn-outline-primary btn-block" disabled={!cartOrder.length} >Generar Orden</button>
                </div>
            </form>
        </div>
    )
}

export default PlaneForm
