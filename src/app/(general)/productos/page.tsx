"use client";
import BotonAgregar from "@/app/Componentents/BotonAgregar";
import CardList from "@/app/Componentents/CardList";
import { Producto } from "@/app/Models/Producto";
import { useContextCarrito } from "@/app/Provider/Provider";
import React, { useEffect } from "react";

export default function page() {
  const { producto, setProducto } = useContextCarrito();

  async function cargarProductos() {
    try {
      const res = await fetch("http://localhost:5000/producto");
      const data = await res.json();

      setProducto(data);
    } catch (error) {
      console.log("Ocurrio un error al invocar el servicio de producto");
    }
  }

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <>
      <div className="container">
        <div className="items-center justify-items-center">
          
        </div>
        <div className="row">
          {producto.map((item) => (
            <>
              <div className="col-md-3" key={item.idProducto}>
                <div className="card">
                  <CardList {...item}></CardList>
                  <BotonAgregar {...item}></BotonAgregar>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
