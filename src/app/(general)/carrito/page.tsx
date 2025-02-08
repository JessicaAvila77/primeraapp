'use client'
import { useContextCarrito } from '@/app/Provider/Provider'
import React from 'react'

export default function page() {

    const{productoCarrito,  totalPagar, setTotalPagar} = useContextCarrito()







  return (
    <div>
        <h1>desplegar detalle carrito</h1>
    </div>
  )
}
