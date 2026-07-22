import { useNavigate } from "react-router-dom";
import css from "./Header.module.css";
import MyButton from "../UI/MyButton/MyButton";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={`${css.header} container`}>
      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li>
            <MyButton text="Home" onClick={() => navigate("/")} />
          </li>
          <li>
            <MyButton text="Variables" onClick={() => navigate("/variables")} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
