
"use client"
import React, { useEffect } from 'react'
import { Producto } from '../Models/Producto'
import { useContextCarrito } from '../Provider/Provider'
import { Carrito } from '../Models/Carrito';

export default function BotonEliminar(item:Producto) {

    const {carrito, setCarrito, calcularTotalPagar}=useContextCarrito();

    const {eliminarDelCarrito} = useContextCarrito()

    
  return (
    <div>
        <button className='btn btn-danger' onClick={() => eliminarDelCarrito(item)}>Eliminar producto</button>
    </div>
  )
}
