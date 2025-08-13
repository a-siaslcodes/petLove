import styles from "./LoginPage.module.scss";
import PetBlock from "../../components/PetBlock/PetBlock";
import Title from "../../components/Title/Title";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <PetBlock />
      <div className={styles.formBox}>
        <Title text="Log in" />
        <p className={styles.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <LoginForm />
        <p className={styles.subText}>
          Don’t have an account?<a className={styles.accent}>Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
