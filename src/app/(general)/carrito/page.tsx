"use client";
import BotonEliminar from "@/app/Componentents/BotonEliminar";
import CardList from "@/app/Componentents/CardList";
import { useContextCarrito } from "@/app/Provider/Provider";
import React, { useEffect } from "react";

export default function page() {
  const { carrito, totalPagar, setTotalPagar, calcularTotalPagar } = useContextCarrito();

   /* 
    useEffect(() => {  
      
        calcularTotalPagar();  
       
    }, [carrito, calcularTotalPagar]);  */

  function pagar() {
    alert("El total a pagar es: L " + totalPagar);
  }


  return (
    <div className="container">
      <div className="row">
        {carrito.map((item) => (
          <>
          <div className='col-md-3' key={item.idProducto}>
              <div className='card'>
                <CardList {...item} ></CardList>
                <BotonEliminar {...item}></BotonEliminar>
              </div>
          </div>        
          </>
        ))}
      </div>

      <br></br>

      <div className="alert alert-ligth" role="alert">
        El total a pagar es: L {totalPagar}
      </div>

      <div className="alert alert-light" role="alert">
        <button className="btn btn-warning" onClick={pagar}>Pagar</button>
      </div>
    </div>
  );
}
