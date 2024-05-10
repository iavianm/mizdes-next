import styles from "./Terrace.module.css";

const TerraceBlock = () => {
  return (
    <section className={styles.terrace__section}>
      <div className={styles.terrace__info}>
        <h3>На каждой вилле</h3>
        <h2>Терраса - идеальное место для отдыха</h2>
        <p>
          На каждой вилле на просторной террасе можно отдыхать в уютных
          шезлонгах, загорать, готовить ужин на барбекю, не боясь жары, дождя и
          ветра, или, укутавшись в плед, наслаждаться окружающей природой за
          чашкой чая.
        </p>
      </div>
    </section>
  );
};

export default TerraceBlock;
