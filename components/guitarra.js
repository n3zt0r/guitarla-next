import Image from "next/image";
import Link from "next/link";
import style from "@/styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { nombre, precio, descripcion, imagen, url } = guitarra;
  const { url: imagenURL } = imagen.data.attributes.formats.medium;
  const { text: textDescription } = descripcion[0].children[0];

  return (
    <div className={style.guitarra}>
      <Image
        src={imagenURL}
        width={600}
        height={400}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className={style.contenido}>
        <h3>{nombre}</h3>
        <p className={style.descripcion}>{textDescription}</p>
        <p className={style.precio}>${precio}</p>
        <Link className={style.enlace} href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
