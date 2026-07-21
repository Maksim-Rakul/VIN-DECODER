interface DecodeItemProps {
  value: string;
  variable: string;
}

const DecodeItem = ({ value, variable }: DecodeItemProps) => {
  return (
    <li>
      <p>{value}</p>
      <p>{variable}</p>
    </li>
  );
};

export default DecodeItem;
