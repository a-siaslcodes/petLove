import styles from "./Title.module.scss";

const Title = ({ text, className = "" }) => {
  return <h2 className={styles.sectionTitle}>{text}</h2>;
};

export default Title;
