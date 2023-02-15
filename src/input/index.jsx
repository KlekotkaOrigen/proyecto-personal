import styles from "./styles.module.css";

const Input = (props) => {
  return <input className={styles.main+" "+props.className} />;
};

export default Input;