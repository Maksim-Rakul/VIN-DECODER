import { useState } from "react";
import MyButton from "../../../../components/UI/MyButton/MyButton";
import css from "./DecodeForm.module.css";
import Error from "../../../../components/UI/Error/Error";

interface DecodeFormProps {
  onSubmit: (vin: string) => void;
}

const DecodeForm = ({ onSubmit }: DecodeFormProps) => {
  const [validMessage, setValidMessage] = useState("");
  const [value, setValue] = useState("");

  const validateVin = (value: string): string => {
    const trimmed = value.trim();

    if (!trimmed) {
      return "VIN код не може бути порожнім";
    }

    if (trimmed.length > 17) {
      return "VIN код має містити рівно 17 символів";
    }

    if (value.includes("I") || value.includes("O") || value.includes("Q")) {
      return "VIN код не може містити літери I, O, Q";
    }

    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase();
    setValue(newValue);

    const error = validateVin(newValue);
    setValidMessage(error);
  };

  const handleSubmit = (formData: FormData) => {
    const vin = formData.get("vin") as string;
    onSubmit(vin);
  };

  return (
    <div>
      <form action={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="vin"
          placeholder="Enter your VIN code"
          value={value}
          onChange={handleChange}
        />
        <MyButton text="Decode" />
      </form>
      {validMessage.length > 0 && <Error message={validMessage} />}
    </div>
  );
};

export default DecodeForm;
