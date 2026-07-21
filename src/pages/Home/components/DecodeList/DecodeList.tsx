import type { Vin } from "../../../../types/vin";
import DecodeItem from "../DecodeItem/DecodeItem";

interface DecodeListProps {
  decodeList: Vin[];
}

const DecodeList = ({ decodeList }: DecodeListProps) => {
  return (
    <ul>
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
  );
};

export default DecodeList;
