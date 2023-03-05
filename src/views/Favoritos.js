import React from "react";
import "../assets/css/galeria.css";
import Context from "../Context";
import { useContext } from "react";

export default function Favoritos() {
  const { fotos, setFotos} = useContext(Context)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotos
          .filter((foto) => foto.liked)
          .map((elemento, item) => (
            <div
              className="foto"
              style={{ backgroundImage: `url(${elemento.src.medium})` }}
              key={item}
              alt={elemento.alt}
            >
            </div>
          ))}
      </div>
    </div>
  );
}
