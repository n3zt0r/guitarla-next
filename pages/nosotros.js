import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
            width={1000}
            height={800}
          />

          <div>
            <p>
              Phasellus tincidunt mauris varius sapien pharetra pulvinar.
              Vivamus nec efficitur lectus. Maecenas vitae quam felis. Sed
              gravida turpis urna, non facilisis leo aliquet vel. Suspendisse
              nec tempus ante. Morbi consequat sapien in erat consectetur
              lacinia. Nullam semper neque turpis, nec interdum lacus viverra
              non.
            </p>
            <p>
              Donec ultrices quis sapien a blandit. Donec sapien nunc, eleifend
              vitae semper quis, consectetur ut erat. Curabitur semper ligula a
              mauris accumsan tristique. Nullam a lacinia ipsum, sed varius
              tortor. Vestibulum pulvinar sapien mollis neque cursus commodo.
              Integer in bibendum nisi. Quisque vel elit quis risus molestie
              varius non sit amet sapien. Aliquam eu massa a libero auctor
              faucibus sit amet in elit. Curabitur nec facilisis justo. In
              bibendum, sem vel auctor interdum, ipsum purus rhoncus justo, at
              convallis eros nisl vitae elit. Etiam vel tortor volutpat,
              molestie lacus non, tristique urna. Morbi ac est enim.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
