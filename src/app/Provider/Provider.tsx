"use client";
import React, { ReactNode, useContext, useState } from "react";
import { ContextCarrito } from "../Context/ContextCarrito";
import { Producto } from "../Models/Producto";
import { Carrito } from "../Models/Carrito";

interface Node {
  children: ReactNode;
}

export default function Provider({ children }: Node) {
  const [producto, setProducto] = useState<Producto[]>([]);
  const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);
  const [carrito, setCarrito] = useState<Carrito[]>([]);

  const [totalPagar, setTotalPagar] = useState(0);

  const agregarCarrito = async (item: Producto) => {

    const totalPagarProducto =
      item.precioProducto +
      (item.isv ? item.precioProducto * (item.isv / 100) : 0);

    const nuevoCarrito: Carrito = {
      id: 0,
      idProducto: item.idProducto,
      nombre: item.nombre,
      precioProducto: item.precioProducto,
      totalPagar: totalPagarProducto,
      estado: 0,
      fechaCreacion: new Date(),
    };

    setCarrito([...carrito, nuevoCarrito]);

    calcularTotalPagar(totalPagarProducto);

    //guardando

    try {
      const response = await fetch("http://localhost:5000/carrito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoCarrito),
      });

      if (!response.ok) {
        console.log("Error al guardar en el carrito");
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  const eliminarDelCarrito = async (item: Producto) => {
 // const eliminarDelCarrito = async (item: Producto) => {
    const nuevoCarrito = carrito.filter((producto) => producto.idProducto !== item.idProducto);
    setCarrito(nuevoCarrito);

   
    const totalEliminado =
      carrito.find((producto) => producto.idProducto === item.idProducto)?.totalPagar || 0;
    calcularTotalPagar(-totalEliminado); 

    try {
      const response = await fetch(`http://localhost:5000/carrito/${item.idProducto}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Error al eliminar del carrito");
      }
    } catch (error) {
      console.error("Error en la eliminación del carrito:", error);
    }
  };

  const calcularTotalPagar = (nuevoTotal: number) => {
    setTotalPagar((prevTotal) => prevTotal + nuevoTotal);
  };

  return (
    <ContextCarrito.Provider
      value={{
        producto,
        setProducto,
        productoCarrito,
        setProductoCarrito,
        agregarCarrito,
        totalPagar,
        setTotalPagar,
        calcularTotalPagar,
        carrito,
        setCarrito,
        eliminarDelCarrito,
      }}
    >
      {children}
    </ContextCarrito.Provider>
  );
}

export function useContextCarrito() {
  return useContext(ContextCarrito);
}
