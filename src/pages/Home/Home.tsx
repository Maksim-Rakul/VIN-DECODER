import { useState } from "react";
import { decodeVin } from "../../services/vinApi";
import DecodeForm from "./components/DecodeForm/DecodeForm";
import type { Vin } from "../../types/vin";
import DecodeList from "./components/DecodeList/DecodeList";
import LastVinsList from "./components/LastVinsList/LastVinsList";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

const Home = () => {
  const [decodingVins, setDecodingVins] = useState<Vin[]>([]);
  const [lastThree, setLastThree] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (vin: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await decodeVin(vin);

      setLastThree([vin, ...lastThree]);
      const filteredVins = res.Results.filter((vin) => !!vin.Value);

      setDecodingVins(filteredVins);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <DecodeForm onSubmit={handleSubmit} />
      <LastVinsList lastVins={lastThree.slice(0, 3)} />
      {isLoading && <Loader />}
      {isError && <Error />}
      <DecodeList decodeList={decodingVins} />
    </div>
  );
};

export default Home;
