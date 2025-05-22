import styles from "./page.module.css";

export const metadata = {
  title: "Home | My App",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to next</h1>
      </main>
      <footer className={styles.footer}>
        <p>Copyright @2025</p>
      </footer>
    </div>
  );
}
