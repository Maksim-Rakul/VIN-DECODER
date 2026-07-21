interface LastVinsItemProps {
  lastVin: string;
}

const LastVinsItem = ({ lastVin }: LastVinsItemProps) => {
  return <li>{lastVin}</li>;
};

export default LastVinsItem;
