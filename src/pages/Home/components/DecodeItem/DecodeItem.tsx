import css from "./DecodeItem.module.css";

interface DecodeItemProps {
  value: string;
  variable: string;
}

const DecodeItem = ({ value, variable }: DecodeItemProps) => {
  return (
    <li className={css.decodeItem}>
      <h3 className={css.decodeValue}>{value}</h3>
      <p>{variable}</p>
    </li>
  );
};

export default DecodeItem;
