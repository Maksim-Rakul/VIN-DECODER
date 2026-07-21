import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/variables">Variables</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
