import data from "../../utils/constants/provinces";
import styles from "./index.module.css";

function Provinsi(props) {
  const provinsi = data.provinces;
  let nomor = 0;
  return (
    <div className={styles.container}>
      <div className={styles.prov}>
        <h2 className={styles.prov__title}>Provinsi</h2>
        <h4 className={styles.prov__subtitle}>Data Covid Berdasarkan Provinsi</h4>
      </div>
      <div className={styles.prov__body}>
        <table className={styles.prov__tab}>
          <thead className={styles.prov__th}>
            <tr>
              <th>No</th>
              <th>Provinsi</th>
              <th>Positif</th>
              <th>Sembuh</th>
              <th>Dirawat</th>
              <th>Meninggal</th>
            </tr>
            {provinsi.map((data, key) => {
              nomor +=1;
              return(
                <tr key={key}>
                  <td>{nomor}</td>
                  <td>{data.kota}</td>
                  <td>{data.kasus}</td>
                  <td>{data.sembuh}</td>
                  <td>{data.dirawat}</td>
                  <td>{data.meninggal}</td>
                </tr>
              );
              })}
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
