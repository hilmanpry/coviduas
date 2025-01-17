import { useState } from "react";
import Alert from "../Alert";
import styles from "./index.module.css";
import image from "./form.png";
import data from "../../utils/constants/provinces";

function Form(props) {
  const provinces = data.provinces;

  const listStatus = ["Positif", "Sembuh", "Dirawat", "Meninggal"];

  const { setProvinsi } = props;

  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleKota(e) {
    setKota(e.target.value);
  }

  function handleStatus(e) {
    setStatus(e.target.value);
  }

  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); 

    if (jumlah === "") {
      setIsJumlahError(true);
    } else {
      const index = provinces.findIndex((item) => item.kota === kota);
      const foundKota = provinces.find((item) => item.kota === kota);

      let currentValueKasus = parseInt(foundKota.kasus);
      let currentValueSembuh = parseInt(foundKota.sembuh);
      let currentValueDirawat = parseInt(foundKota.dirawat);
      let currentValueMeninggal = parseInt(foundKota.meninggal);

      let valueNowKasus = status === "Positif" ? parseInt(jumlah) : parseInt(0);
      let valueNowSembuh = status === "Sembuh" ? parseInt(jumlah) : parseInt(0);
      let valueNowDirawat = status === "Dirawat" ? parseInt(jumlah) : parseInt(0);
      let valueNowMeninggal = status === "Meninggal" ? parseInt(jumlah) : parseInt(0);

      const provinsi = {
        kota: kota,
        kasus: currentValueKasus + valueNowKasus,
        sembuh: currentValueSembuh + valueNowSembuh,
        dirawat: currentValueDirawat + valueNowDirawat,
        meninggal: currentValueMeninggal + valueNowMeninggal,
      };

      provinces[index] = provinsi;

      setProvinsi([...provinces]);

      setIsJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.form__left}>
          <img src={image} alt="" />
        </div>
          
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>

            <div className={styles.form__group}>
              <label className={styles.form__label}>Provinsi</label>
              <select className={styles.form__select} value={kota} onChange={handleKota} name="kota" id="kota">
                <option value="Pilih Provinsi">Pilih Provinsi</option>
                {provinces.map((province, key) => {
                  return (
                    <option value={province.kota} key={key}>
                      {province.kota}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label}>Status</label>
              <select className={styles.form__select}
                value={status}
                onChange={handleStatus}
                name="status"
                id="status">
                <option value="Pilih Status">Pilih Status</option>
                {listStatus.map((statusCovid, key) => {
                  return (
                    <option value={statusCovid} key={key}>
                      {statusCovid}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label}>Jumlah</label>
              <input className={styles.form__input}
                value={jumlah}
                onChange={handleJumlah}
                id="jumlah"
                name="jumlah"
                type="number"
              ></input>
              {isJumlahError && <Alert>Jumlah Wajib Diisi Yah!</Alert>}
            </div>
              <button className={styles.form__button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
