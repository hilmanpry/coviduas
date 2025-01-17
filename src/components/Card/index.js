import styles from "./index.module.css";

function Card(props) {
  const { status, total, detail } = props;

  return (
      <div className={styles.cards}>
        <div className={styles.card}>
          <a href={detail} target="_blank" className={styles.a}>
            <h4 className={styles.status}>{status}</h4>
            <h2>{total.toLocaleString()}</h2>
          </a>
        </div>
      </div>
  );
}

export default Card;
