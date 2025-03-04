import { useState, useRef } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CreateProfileFormData } from "../types";
import formatPhone from "utilities/formatPhone";

const usePhoneInput = (setValue: UseFormSetValue<CreateProfileFormData>) => {
  const [phone, setPhone] = useState<string>("");
  const phoneInputRef = useRef<HTMLInputElement>(null!);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    setPhone(formattedValue);
    setValue("phone", formattedValue, { shouldValidate: true });
  };

  return { phone, phoneInputRef, handlePhoneChange };
};

export default usePhoneInput;
