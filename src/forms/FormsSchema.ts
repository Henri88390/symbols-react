import { InferType, lazy, mixed, number, object, string } from "yup";
import { Gender, ManJob, WomanJob } from "../models/Gender";

export const form1Schema = object().shape({
  gender: mixed().oneOf(Object.values(Gender)).required(),
  job: string().when("gender", (gender) => {
    return gender[0] === Gender.Male
      ? mixed().oneOf(Object.values(ManJob)).required()
      : mixed().oneOf(Object.values(WomanJob)).optional();
  }),
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
  age: lazy(value =>value === '' ? string().required() :  number().min(0).required()),
  petName: string().min(2, "Too Short!").max(50, "Too Long!").required(),
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
