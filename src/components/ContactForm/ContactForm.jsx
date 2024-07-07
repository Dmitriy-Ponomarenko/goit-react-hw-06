import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Kateryna Bobryshova"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage
            className={css.ErrorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={phoneFieldId} className={css.label}>
            Phone number
          </label>
          <Field
            type="tel"
            name="number"
            id={phoneFieldId}
            className={css.input}
            placeholder="111-22-33"
          />
          <ErrorMessage
            className={css.ErrorMessage}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
          <svg
            className={css.svg}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M5.75 11.2059L10.75 16.5L19.25 7.5"
              stroke="#FDFCFD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
