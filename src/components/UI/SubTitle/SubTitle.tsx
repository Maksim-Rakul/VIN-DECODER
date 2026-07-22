import css from "./SubTitle.module.css";

interface SubTitleProps {
  text: string;
}

const SubTitle = ({ text }: SubTitleProps) => {
  return <h2 className={css.subTitle}>{text}</h2>;
};

export default SubTitle;
