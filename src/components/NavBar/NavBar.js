import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
export const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.text}>Calculator</span>
      </nav>
    </>
  );
};
