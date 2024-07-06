import { InferType, object, string } from "yup";

export const form1Schema = object().shape({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  passwordConfirmation: string().test(
    "passwords-should-match",
    "Passwords must match",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

export const form2Schema = object().shape({
  firstName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const formsSchema = form1Schema.concat(form2Schema);

export type Form1Schema = InferType<typeof form1Schema>;
export type Form2Schema = InferType<typeof form2Schema>;
export type FormsSchema = InferType<typeof formsSchema>;
