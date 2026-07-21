import type { Variable } from "../../../../types/variables";
import VariableItem from "../VariableItem/VariableItem";

interface VariableListProps {
  variableList: Variable[];
}

const VariableList = ({ variableList }: VariableListProps) => {
  return (
    <ul>
      {variableList.map((variable) => (
        <VariableItem key={variable.ID} variable={variable} />
      ))}
    </ul>
  );
};

export default VariableList;
