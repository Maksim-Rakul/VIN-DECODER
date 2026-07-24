import { Link } from "react-router-dom";
import type { Variable } from "../../../../types/variables";
import css from "./VariableItem.module.css";

interface VariableItemProps {
  variable: Variable;
}

const VariableItem = ({ variable }: VariableItemProps) => {
  return (
    <li className={css.variableItem}>
      <Link to={`/variables/${variable.ID}`}>
        <h2 className={css.subTitle}>{variable.Name}</h2>
        <p>{variable.Description}</p>
      </Link>
    </li>
  );
};

export default VariableItem;
