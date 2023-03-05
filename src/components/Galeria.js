import React from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";
import { useContext } from "react";

export default function Galeria() {

  const { fotos, setFotos} = useContext(Context)

  const addFavoritos = (id) => {
    
    const seleccionado = fotos.findIndex((foto) => foto.id === id)
    fotos[seleccionado].liked = "true"
    setFotos([...fotos])
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto, item) => (
        <div
          onClick={() => addFavoritos(foto.id)}
          className="foto"
          style={{ backgroundImage: `url(${foto.src.medium})` }}
          key={item}
          alt={foto.alt}
        >
          <Heart filled={foto.liked} />
          <p> {foto.alt} </p>
        </div>
      ))}
    </div>
    
    );
  }
