import type { Variable } from "../../../../types/variables";
import VariableItem from "../VariableItem/VariableItem";
import css from "./VariableList.module.css";

interface VariableListProps {
  variableList: Variable[];
}

const VariableList = ({ variableList }: VariableListProps) => {
  return (
    <ul className={css.variableList}>
      {variableList.map((variable) => (
        <VariableItem key={variable.ID} variable={variable} />
      ))}
    </ul>
  );
};

export default VariableList;
