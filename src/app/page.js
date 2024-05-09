import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div class="wrapper">
      <header>Currency Converter</header>
      <form action="#">
        <div class="amount">
          <p>Ingresar Cantidad</p>
          <input type="text" value="1"></input>
        </div>
        <div class="drop-list">
          <div class="from">
            <p>De</p>
            <div class="select-box">
              <img src="https://flagcdn.com/48x36/us.png" alt="flag"></img>
              <select></select>
            </div>
          </div>
          <div class="icon"><i class="fas fa-exchange-alt"></i></div>
          <div class="to">
            <p>A</p>
            <div class="select-box">
              <img src="https://flagcdn.com/48x36/np.png" alt="flag"></img>
              <select> </select>
            </div>
          </div>
        </div>
        
        <div class="exchange-rate">Generara conversion</div>
        <button>Convertir</button>
      </form>
    </div>

    </main>
  );
}

