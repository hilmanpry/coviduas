import styles from "./index.module.css";

function Footer() {
  return (
   <>
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>Covid ID</h1>
          <p> Develop by haelzf-0110221279 </p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
   </>
  );
}

export default Footer;
