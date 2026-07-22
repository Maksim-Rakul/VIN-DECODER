import SubTitle from "../../../../components/UI/SubTitle/SubTitle";
import type { Vin } from "../../../../types/vin";
import DecodeItem from "../DecodeItem/DecodeItem";
import css from "./DecodeList.module.css";

interface DecodeListProps {
  decodeList: Vin[];
}

const DecodeList = ({ decodeList }: DecodeListProps) => {
  return (
    <section>
      <SubTitle text="Result" />
      <ul className={css.decodeList}>
        {decodeList.map((listItem) => {
          return (
            <DecodeItem
              key={listItem.VariableId}
              value={listItem.Value}
              variable={listItem.Variable}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default DecodeList;
