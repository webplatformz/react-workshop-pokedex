import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "../ProfilePage";
import styles from "./ProfileFormInput.module.scss";

type Props = {
  name: keyof FormValues;
  label: string;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
};

function ProfileFormInput({
  name,
  label,
  placeholder,
  register,
  registerOptions,
  error,
}: Props) {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        id={name}
        className={error ? styles.inputError : ""}
        placeholder={placeholder}
        {...register(name, registerOptions)}
      />
      {error?.type && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
}

export default ProfileFormInput;
