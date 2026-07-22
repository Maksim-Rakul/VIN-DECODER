import MyButton from "../../../../components/UI/MyButton/MyButton";
import css from "./DecodeForm.module.css";

interface DecodeFormProps {
  onSubmit: (vin: string) => void;
}

const DecodeForm = ({ onSubmit }: DecodeFormProps) => {
  const handleSubmit = (formData: FormData) => {
    const vin = formData.get("vin") as string;

    if (!vin) return;

    onSubmit(vin);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="vin"
        placeholder="Enter your VIN code"
      />
      <MyButton text="Decode" />
    </form>
  );
};

export default DecodeForm;
