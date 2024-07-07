import { Form, Formik } from "formik";
import { useState } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { FormsSchema, form1Schema, form2Schema } from "./FormsSchema";

export function FormsContainer() {
  const initialValues: FormsSchema = {
    //form 1
    gender: "",
    job: "",
    password: "",
    passwordConfirmation: "",

    //form 1 modal
    petName: "",
    age: "",

    //form 2
    email: "",
    firstName: "",
    lastName: "",
  };

  const [step, setStep] = useState<number>(0);
  function getValidationSchema() {
    if (step === 0) return form1Schema;
    return form2Schema;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getValidationSchema}
      onSubmit={(values) => {
        if (step === 0) setStep(1);
        if (step === 1) console.log({ values });
      }}
    >
      <Form>
        {step === 0 && <Form1 />}
        {step === 1 && <Form2 onPrevious={() => setStep(0)} />}
      </Form>
    </Formik>
  );
}
