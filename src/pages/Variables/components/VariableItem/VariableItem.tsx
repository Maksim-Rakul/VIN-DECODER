import { Link } from "react-router-dom";
import type { Variable } from "../../../../types/variables";

interface VariableItemProps {
  variable: Variable;
}

const VariableItem = ({ variable }: VariableItemProps) => {
  return (
    <li>
      <Link to={`/variables/${variable.ID}`}>
        <h2>{variable.Name}</h2>
        <p>{variable.Description}</p>
      </Link>
    </li>
  );
};

export default VariableItem;
