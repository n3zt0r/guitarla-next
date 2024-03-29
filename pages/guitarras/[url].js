import Image from "next/image";
import style from "@/styles/guitarras.module.css";
import Layout from "@/components/layout";

export default function Producto({ guitarra }) {
  const { nombre, precio, descripcion, imagen } = guitarra[0].attributes;
  const { url: imagenURL } = imagen.data.attributes;
  const { text: textDescription } = descripcion[0].children[0];

  return (
    <Layout title={`Guitarra ${nombre}`}>
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
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: { url: guitarra.attributes.url },
  }));

  console.log(paths);

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const { data: guitarra } = await respuesta.json();

  return { props: { guitarra } };
}

// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();

//   return { props: { guitarra } };
// }
