import { useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProfileSchema } from "../schemas/createProfileSchema";
import usePhoneInput from "../hooks/usePhoneInput";
import InputField from "components/form-control/InputField";
import { CreateProfileFormData, CreateProfileFormRef } from "../types";

import styles from "./CreateProfileForm.module.css";

type CreateProfileFormProps = {
  onSubmit?: (data: CreateProfileFormData) => void;
  ref?: React.Ref<CreateProfileFormRef>;
};

const CreateProfileForm = ({ onSubmit, ref }: CreateProfileFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<CreateProfileFormData>({
    resolver: yupResolver(createProfileSchema),
    mode: "onBlur",
  });

  const { phone, phoneInputRef, handlePhoneChange } = usePhoneInput(setValue);

  useImperativeHandle(ref, () => ({
    submitForm: () =>
      handleSubmit(
        (data) => onSubmit?.(data),
        () => {
          trigger();
          if (errors.phone && phoneInputRef.current) {
            phoneInputRef.current.focus();
          }
        }
      )(),
  }));

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.row}>
          <InputField
            id="firstName"
            label="First Name"
            type="text"
            register={register("firstName")}
            error={errors.firstName?.message}
          />
          <InputField
            id="lastName"
            label="Last Name"
            type="text"
            register={register("lastName")}
            error={errors.lastName?.message}
          />
        </div>

        <div className={styles.row}>
          <InputField
            id="email"
            label="Email"
            type="email"
            register={register("email")}
            error={errors.email?.message}
          />
          <InputField
            id="phone"
            label="Phone"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            inputRef={phoneInputRef}
            placeholder="(123) 456-7890"
            error={errors.phone?.message}
          />
        </div>

        <div className={styles.row}>
          <InputField
            id="username"
            label="Username"
            type="text"
            register={register("username")}
            error={errors.username?.message}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            register={register("password")}
            error={errors.password?.message}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfileForm;
