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
    <div>
      <form action={handleSubmit}>
        <input type="text" name="vin" />
        <button type="submit">Decode</button>
      </form>
    </div>
  );
};

export default DecodeForm;
