import React from 'react'
import { useContextCarrito } from '../Provider/Provider'
import { Producto } from '../Models/Producto'



export default function CardList(item:Producto) {


  return (

    <>    
          <img src={item.img} className="card-img-top" style={{ 'height': '30vh' }} />
          <div className="card-body">
            <h5 className="card-title">Producto: {item.nombre}</h5>
            <p className="card-title">Precio: {item.precioProducto}</p>
            <p className="card-text">ISV:{item.isv/100*item.precioProducto}</p>
            
          </div>
       
    </>
    

  )
}
