import styles from './Menu.module.sass';
import ThemeSwitch from './ThemeSwitch';

export default function Menu() {
    return (
      <div className={styles.menu}>
        <div className={styles.links}>
          <a href="/">Home</a>
          <span>/</span>
          <a href="/now">Now</a>
          <span>/</span>
          <a href="/blog">Blog</a>
          {/* Coming soon.... */}
          {/* <span>/</span>
          <Link to="/stats">Statistics</Link> */}
        </div>
        <ThemeSwitch className={styles.themeSwitch} />
      </div>
    )
};
