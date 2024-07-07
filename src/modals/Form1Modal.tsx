import { Box, Button, Modal, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { useState } from "react";
import { Form1Schema } from "../forms/FormsSchema";
import styles from "./Form1Modal.module.scss";

type Form1ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};
export function Form1Modal({ closeModal }: Form1ModalProps) {
  const { handleChange, errors, touched, setValues, values } =
    useFormikContext<Form1Schema>();
  const { petName, age } = values;

  const [initialValuesPetName] = useState(petName);
  const [initialValuesAge] = useState(age);

  function handleClose() {
    setValues({
      ...values,
      age: initialValuesAge,
      petName: initialValuesPetName,
    });
    closeModal();
  }
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBoxContainer}>
        <TextField
          required
          fullWidth
          name="age"
          label="Age"
          value={values.age}
          onChange={handleChange}
          error={touched.age && Boolean(errors.age)}
          helperText={touched.age && errors.age}
          type="number"
        />
        <TextField
          required
          fullWidth
          name="petName"
          label="Pet name"
          value={values.petName}
          onChange={handleChange}
          error={touched.petName && Boolean(errors.petName)}
          helperText={touched.petName && errors.petName}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={closeModal}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}
