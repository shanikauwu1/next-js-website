import Button from "./components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Home | My App",
};

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroTexts}>
          <h1 className={styles.gradientText}>
            Innovative Solutions Designed to Elevate Your Business
          </h1>
          <Button className={styles.heroTextsBtn} href="/portfolio">
            Get Started
          </Button>
        </div>
        <Image
          src="/hero.png"
          alt="home page hero image"
          width={1000}
          height={1000}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
