import LastVinsItem from "../LastVinsItem/LastVinsItem";

interface LastVinsListProps {
  lastVins: string[];
}

const LastVinsList = ({ lastVins }: LastVinsListProps) => {
  return (
    <ul>
      {lastVins.map((lastItem) => (
        <LastVinsItem key={lastItem} lastVin={lastItem} />
      ))}
    </ul>
  );
};

export default LastVinsList;
