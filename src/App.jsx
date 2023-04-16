import "./App.css";
import styles from "./styles.module.css";
import Input from "./components/Search";
import Menu from "./components/menu";
import User from "./components/user";
import { Link, Outlet } from "react-router-dom";
import Logo from "./components/logo"
import Pie from "./components/pie"

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <Logo />
        <Input />
        <User className={styles.headerRight} />
      </header>
      <Menu />
      <Outlet />
      <footer>
        <Pie></Pie>
      </footer>
    </div>
  );
}

export default App;
