import { UseFormRegisterReturn } from "react-hook-form";

import styles from "./InputField.module.css";

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  register?: UseFormRegisterReturn;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  error?: string;
};

const InputField = ({
  id,
  label,
  type,
  register,
  value,
  onChange,
  inputRef,
  placeholder,
  error,
}: InputFieldProps) => {
  return (
    <div className={styles.fieldGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        className={styles.input}
        {...(onChange && { onChange })}
        {...(inputRef && { ref: inputRef })}
        {...(register && value === undefined && register)}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default InputField;
