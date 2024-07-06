import { Button, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import styles from "./Form1.module.scss";
import { Form1Schema } from "./FormsSchema";

export function Form1() {
  const { handleChange, errors, touched, handleBlur, values } =
    useFormikContext<Form1Schema>();

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        fullWidth
        name="passwordConfirmation"
        label="Confirm password"
        type="password"
        value={values.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.passwordConfirmation && Boolean(errors.passwordConfirmation)
        }
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Next
      </Button>
    </div>
  );
}
