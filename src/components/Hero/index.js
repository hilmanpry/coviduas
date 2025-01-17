import styles from "./index.module.css";
import image from "./hero.png";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Penyakit saluran pernafasan yang disebabkan oleh
            virus corona jenis baru. Merupakan kelompok virus
            penyebab  influensa  ringan sampai berat
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={image} alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
