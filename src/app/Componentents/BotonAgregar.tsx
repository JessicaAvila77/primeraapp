import React from 'react'
import { useContextCarrito } from '../Provider/Provider'
import { Producto } from '../Models/Producto'

export default function BotonAgregar(item:Producto) {


    const {agregarCarrito} = useContextCarrito()


  return (
    <div>

        <button className='btn btn-primary' onClick={()=>agregarCarrito(item)}>Agregar Producto</button>
        
    </div>
  )
}
