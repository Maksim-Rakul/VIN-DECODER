import { useParams } from "react-router-dom";
import { getVariablesByID } from "../../services/vinApi";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";
import { useFetchWithParams } from "../../hooks/useFetchWithParams";
import css from "./VariablesId.module.css";

const VariablesId = () => {
  const { id } = useParams();

  const { isLoading, data } = useFetchWithParams(getVariablesByID, Number(id));

  if (isLoading) return <Loader />;

  return (
    <div className="container">
      {!data ? (
        <Error message="Not found" />
      ) : (
        <div className={css.wrap}>
          <h3 className={css.name}>Element name: {data?.ElementName}</h3>
          <p>Name: {data?.Name}</p>
        </div>
      )}
    </div>
  );
};

export default VariablesId;
