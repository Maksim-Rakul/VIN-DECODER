import css from "./LastVinsItem.module.css";

interface LastVinsItemProps {
  lastVin: string;
}

const LastVinsItem = ({ lastVin }: LastVinsItemProps) => {
  return <li className={css.lastListItem}>{lastVin}</li>;
};

export default LastVinsItem;
