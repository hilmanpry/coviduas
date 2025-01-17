import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Global from "../components/Global";
import Provinsi from "../components/Provinsi";
import Form from "../components/Form";
import Footer from "../components/Footer";
import data from "../utils/constants/provinces";
import { useState } from "react";
import styles  from "../pages/index.module.css";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <Global />
      <Provinsi provinces={provinces} setProvinces={setProvinces} />
      <Form provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <div className={styles.body}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
