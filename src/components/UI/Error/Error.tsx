import css from "./Error.module.css";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  if (message) {
    return <p className={css.error}>{message}</p>;
  }

  return <p className={css.error}>Ooops, some error</p>;
};

export default Error;
