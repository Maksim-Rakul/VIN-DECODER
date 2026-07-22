import SubTitle from "../../../../components/UI/SubTitle/SubTitle";
import LastVinsItem from "../LastVinsItem/LastVinsItem";
import css from "./LastVinsList.module.css";

interface LastVinsListProps {
  lastVins: string[];
}

const LastVinsList = ({ lastVins }: LastVinsListProps) => {
  return (
    <section>
      <SubTitle text="Last VINs" />
      <ol className={css.lastList}>
        {lastVins.map((lastItem, index) => (
          <LastVinsItem key={index} lastVin={lastItem} />
        ))}
      </ol>
    </section>
  );
};

export default LastVinsList;
