import { Button, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import styles from "./Form2.module.scss";
import { Form2Schema } from "./FormsSchema";

type Form2Props = {
  onPrevious: () => void;
};

export function Form2({ onPrevious }: Form2Props) {
  const { handleChange, errors, touched, handleBlur, values } =
    useFormikContext<Form2Schema>();

  return (
    <div className={styles.container}>
      <TextField
        fullWidth
        name="firstName"
        label="First name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
      />
      <TextField
        fullWidth
        name="lastName"
        label="Last name"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
      />

      <div className={styles.footer}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={onPrevious}
        >
          Previous
        </Button>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
