import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import { Form1Modal } from "../modals/Form1Modal";
import { Gender, ManJob, WomanJob } from "../models/Gender";
import styles from "./Form1.module.scss";
import { Form1Schema } from "./FormsSchema";

export function Form1() {
  const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
  const { handleChange, errors, touched, setFieldValue, resetForm, values } =
    useFormikContext<Form1Schema>();

  function handleGenderCHange<T>(event: SelectChangeEvent<T>) {
    setFieldValue("gender", event.target.value);
    setFieldValue("job", "");
  }

  const femaleJobValues = Object.values(WomanJob);
  const maleJobValues = Object.values(ManJob);
  const jobValues = [...femaleJobValues, ...maleJobValues];
  const genderValues = Object.values(Gender);

  const allJobOptions = jobValues.map((value) => ({
    label: value,
    value,
  }));

  const femaleJobOptions = femaleJobValues.map((value) => ({
    label: value,
    value,
  }));

  const maleJobOptions = maleJobValues.map((value) => ({
    label: value,
    value,
  }));

  const genderOptions = genderValues.map((value) => ({
    label: value,
    value,
  }));

  function closeModal() {
    setIsOpenModal(false);
  }

  function openModal() {
    setIsOpenModal(true);
  }

  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" required>
          Gender
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="Gender"
          name={"gender"}
          value={values.gender}
          onChange={(event) => handleGenderCHange(event)}
          error={touched.gender && Boolean(errors.gender)}
        >
          {genderOptions.map((option, index) => (
            <MenuItem value={option.value} key={index}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <div className={styles.formHelperText}>
          {touched.gender && errors.gender && (
            <FormHelperText error>{String(errors.gender)}</FormHelperText>
          )}
        </div>
      </FormControl>

      {values.gender && (
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-job-label"
            required={values.gender === Gender.Male}
          >
            Job
          </InputLabel>
          <Select
            labelId="demo-simple-select-job-label"
            label="Job"
            name={"job"}
            value={values.job}
            onChange={handleChange}
            error={touched.job && Boolean(errors.job)}
          >
            {values.gender === Gender.Female &&
              femaleJobOptions.map((option, index) => (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              ))}

            {values.gender === Gender.Male &&
              maleJobOptions.map((option, index) => (
                <MenuItem value={option.value} key={index}>
                  {option.label}
                </MenuItem>
              ))}
          </Select>
          <div className={styles.formHelperText}>
            {touched.job && errors.job && (
              <FormHelperText error>{String(errors.job)}</FormHelperText>
            )}
          </div>
        </FormControl>
      )}

      <TextField
        fullWidth
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
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
        error={
          touched.passwordConfirmation && Boolean(errors.passwordConfirmation)
        }
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
      />

      <Button onClick={openModal}>Open modal</Button>
      {isModalOpen && (
        <Form1Modal isOpen={isModalOpen} closeModal={closeModal} />
      )}
      <Button color="primary" variant="contained" fullWidth type="submit">
        Next
      </Button>
      <div>
        {touched.age && errors.age && (
          <FormHelperText error>{String(errors.age)}</FormHelperText>
        )}
        {touched.petName && errors.petName && (
          <FormHelperText error>{String(errors.petName)}</FormHelperText>
        )}
      </div>
    </div>
  );
}
