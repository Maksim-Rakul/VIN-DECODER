import { useParams } from "react-router-dom";
import { getVariablesByID } from "../../services/vinApi";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";
import { useFetchWithParams } from "../../hooks/useFetchWithParams";

const VariablesId = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useFetchWithParams(
    getVariablesByID,
    Number(id),
  );

  if (isError) return <Error />;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>Element name: {data?.ElementName}</p>
          <p>Name: {data?.Name}</p>
        </div>
      )}
    </div>
  );
};

export default VariablesId;
