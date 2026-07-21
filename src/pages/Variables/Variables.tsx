import { useEffect, useState } from "react";
import { getVariables } from "../../services/vinApi";
import type { Variable } from "../../types/variables";
import VariableList from "./components/VariableList/VariableList";

const Variables = () => {
  const [variablesList, setVariablesList] = useState<Variable[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getVariables();

      setVariablesList(res.Results);
    };

    fetch();
  }, []);

  return (
    <div>
      <VariableList variableList={variablesList} />
    </div>
  );
};

export default Variables;
