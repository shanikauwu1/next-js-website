import styles from "./page.module.css";
import Image from "next/image";
import Button from "../components/Button/Button";
function About() {
  return (
    <section className={styles.page}>
      <div className={styles.bannerWrapper}>
        <Image
          src="/banner.jpg"
          alt="Modern laptop on a wooden desk with a mouse, used for web development"
          fill
          priority
          className={styles.bannerImage}
        />

        <article className={styles.bannerContent}>
          <h1 className={styles.bannerHeading}>Empower Your Web Presence</h1>
          <p className={styles.bannerSubtext}>
            Modern, responsive, and user-focused solutions
          </p>
        </article>
      </div>

      <div className={styles.textContainer}>
        <article className={styles.textLeft}>
          <h2>Who We Are? </h2>
          <p>
            Fusce imperdiet pulvinar nisi, sit amet euismod arcu congue eget.
            Donec eu libero ut purus fermentum vestibulum. Morbi sed arcu ut
            odio condimentum suscipit. Nulla eu varius augue, mattis mollis dui.
            Ut sit amet mauris ornare, egestas enim quis, consequat arcu.
            Curabitur condimentum placerat luctus. Ut pharetra elit vitae sapien
            viverra, ut finibus lorem tempus.
          </p>
          <p>
            Nulla eu varius augue, mattis mollis dui. Ut sit amet mauris ornare,
            egestas enim quis, consequat arcu. Curabitur condimentum placerat
            luctus. Ut pharetra elit vitae sapien viverra, ut finibus lorem
            tempus.
          </p>
        </article>
        <article className={styles.textRight}>
          <h2>What We Do?</h2>
          <p>
            Nullam cursus accumsan facilisis. Proin vel feugiat mi. Praesent ut
            lorem urna. Phasellus diam quam, rutrum ac tortor in, semper porta
            nisl. Vestibulum venenatis arcu ex, in convallis turpis rhoncus
            tempor. Etiam a pretium enim. Fusce sed lobortis odio. Vivamus vel
            nulla magna.
          </p>
          <Button href="/contact">Connect</Button>
        </article>
      </div>
    </section>
  );
}

export default About;
