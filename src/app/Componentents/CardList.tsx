import React from 'react'
import { useContextCarrito } from '../Provider/Provider'
import { Producto } from '../Models/Producto'



export default function CardList(item:Producto) {

    const {agregarCarrito}=useContextCarrito()


  return (

    <>

      <div className='col-md-3' key={item.IdProducto}>
        <div className="card" >
          <img src={item.imagenProducto} className="card-img-top" style={{ 'height': '20vh' }} />
          <div className="card-body">
            <h5 className="card-title">{item.nombreProducto}</h5>
            <p className="card-text">{item.precioProducto}</p>
            <button type='button' className="btn btn-primary" onClick={()=>agregarCarrito(item)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
    


  )
}
