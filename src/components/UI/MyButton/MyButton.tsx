import css from "./MyButton.module.css";

interface MyButtonProps {
  text: string;
  onClick?: () => void;
}

const MyButton = ({ text, onClick }: MyButtonProps) => {
  return (
    <button className={css.myBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
