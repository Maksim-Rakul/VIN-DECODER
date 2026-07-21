import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVariablesByID } from "../../services/vinApi";

const VariablesId = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      await getVariablesByID(id!);
    };

    fetch();
  }, [id]);

  return <div>VARIABLES: {id}</div>;
};

export default VariablesId;
