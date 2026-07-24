import { useEffect, useState } from "react";
import { decodeVin } from "../../services/vinApi";
import type { Vin } from "../../types/vin";
import css from "./Home.module.css";

import DecodeForm from "./components/DecodeForm/DecodeForm";
import DecodeList from "./components/DecodeList/DecodeList";
import LastVinsList from "./components/LastVinsList/LastVinsList";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

const Home = () => {
  const [decodingVins, setDecodingVins] = useState<Vin[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [lastThree, setLastThree] = useState<string[]>(() => {
    const list = localStorage.getItem("lastList");

    if (!list) return [];

    const parsed = JSON.parse(list);
    return Array.isArray(parsed) ? parsed : [];
  });

  useEffect(() => {
    localStorage.setItem("lastList", JSON.stringify(lastThree));
  }, [lastThree]);

  const handleSubmit = async (vin: string) => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await decodeVin(vin);

      setLastThree([vin, ...lastThree].slice(0, 3));

      const filteredVins = res.Results.filter((vin) => !!vin.Value);

      setDecodingVins(filteredVins);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`container`}>
      <div className={css.topWrap}>
        <DecodeForm onSubmit={handleSubmit} />
        {lastThree.length > 0 && <LastVinsList lastVins={lastThree} />}
      </div>

      {isLoading && <Loader />}
      {isError && <Error />}
      {decodingVins.length > 0 && <DecodeList decodeList={decodingVins} />}
    </div>
  );
};

export default Home;
