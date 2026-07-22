import { getVariables } from "../../services/vinApi";
import VariableList from "./components/VariableList/VariableList";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

const Variables = () => {
  const { isLoading, isError, data } = useFetch(getVariables);

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      {data?.Results && <VariableList variableList={data?.Results} />}
    </div>
  );
};

export default Variables;
