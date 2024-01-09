import styles from "./Terrace.module.css";

const TerraceBlock = () => {
  return (
    <section className={styles.terrace__section}>
      <div className={styles.terrace__info}>
        <h3>На каждой вилле</h3>
        <h2>Терраса - идеальное место для отдыха</h2>
        <p>
          На каждой вилле На просторной террасе можно отдыхать в уютных
          шезлонгах и загорать, готовить ужин в барбекю, не боясь жары, дождя и
          ветра, или, укутавшись в плед, пить чай и наслаждаться окружающей
          природой.
        </p>
      </div>
    </section>
  );
};

export default TerraceBlock;
