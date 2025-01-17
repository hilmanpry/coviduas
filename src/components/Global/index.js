import Card from "../Card";
import styles from "./index.module.css";
import data from "../../utils/constants/indonesia";

function Global() {
  return (
    <div className={styles.container}>
      <div className={styles.gmain}>
        <h2 className={styles.title}>Indonesia</h2>
        <h4 className={styles.subtitle}>Data Covid Berdasarkan Indonesia</h4>
      </div>
      <div className={styles.gbody}>
        {data.indonesia.map((data) => (
          <Card
             key={data.status}
             status={data.status}
             total={data.total}
             detail={data.detail}
          />
        ))}
      </div>
    </div>
  );
}

export default Global;
