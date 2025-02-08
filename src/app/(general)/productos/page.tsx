'use client'
import CardList from '@/app/Componentents/CardList'
import { Producto } from '@/app/Models/Producto'
import { useContextCarrito } from '@/app/Provider/Provider'
import React, { useEffect } from 'react'


export default function page() {

    const {producto, setProducto} =useContextCarrito()

    useEffect(() => {

      let body: Producto[] = 
      [
        {
          IdProducto : producto.length+1,
          nombreProducto:"Tennis",
          precioProducto:1500,
          isvProducto:12,
          imagenProducto:"https://th.bing.com/th/id/OIP.N9LsV5PDQBmJzhpfWfaTBwHaHa?w=189&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          
        },

        {
          IdProducto : producto.length+2,
          nombreProducto:"Sombrero",
          precioProducto:1000,
          isvProducto:12,
          imagenProducto:"https://th.bing.com/th/id/OIP.xhev3T8ZTwnZz1H7fAvV7QHaF-?w=235&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7"
         
        }
      ]

      setProducto(body)

    }, [])


  return (
    <div>

      <div className='row'>
          {

            producto.map((item) => (
              <CardList {...item}></CardList>
            ))
          }



        </div>

      


      


    </div>
  )
}
