import { useUserContext } from "../../service/user/UserContext";
import ProfileFormInput from "./profile-form-input/ProfileFormInput";
import { SubmitHandler, useForm } from "react-hook-form";

export type FormValues = {
  username: string;
  email: string;
};

function ProfilePage(): JSX.Element {
  const { userData, setUserData } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      username: userData?.name || "",
      email: userData?.email || "",
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("form submisson:", data);
    setUserData({ name: data.username, email: data.email });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProfileFormInput
        name="username"
        label="Username"
        placeholder="Dr. React"
        error={errors.username}
        register={register}
        registerOptions={{
          required: {
            value: true,
            message: "The username field is required!",
          },
          maxLength: {
            value: 25,
            message: "The username should not be longer than 25 characters!",
          },
        }}
      />
      <ProfileFormInput
        name="email"
        label="E-Mail"
        placeholder="react@zuehlke.com"
        error={errors.email}
        register={register}
        registerOptions={{
          required: {
            value: true,
            message: "The e-mail field is required!",
          },
          pattern: {
            value: /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "The input provided is not a valid e-mail address!",
          },
        }}
      />
      <input type="submit" value="save" />
    </form>
  );
}

export default ProfilePage;
