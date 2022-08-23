import { useContext } from "react";
import { SignupProvider } from "../contexts/SignupContext";

export function validatePassword() {
  const { data, setFormError, formError } = useContext(SignupProvider);

  if (data.password === "") {
    setFormError({ ...formError, password: "password cannot be empty" });
    return false;
  }
  return true;
}
export function confirmPassword({ password }) {
  const { data, setFormError, formError } = useContext(SignupProvider);
  if (data.password !== password) {
    setFormError({
      ...formError,
      confirmPassword: "passwords does'nt match !",
    });
    return false;
  }
  return true;
}
