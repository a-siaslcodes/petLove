import styles from "./Logo.module.scss";
import icons from "../../../img/icons/icons.svg";

const Logo = () => {
  return (
    <a href="/" aria-label="Home">
      <svg className={styles.logo}>
        <use href={`${icons}#icon-logo-s-1`}></use>
      </svg>
    </a>
  );
};

export default Logo;
