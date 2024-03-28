import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <h1>Tech Podcast</h1>
        <br />
        <h2>قريبًا</h2>

      </div>
    </main>
  );
}
