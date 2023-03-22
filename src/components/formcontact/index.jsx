import { useEffect, useState } from "react";
import InputField from "./InputField";
import InputField2 from "./InputField2";
import SelectField from "./SelectField";
import TextareaField from "./textarea";
import emailjs from "emailjs-com";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_g9doy7m", "template_t647ktr", values, "ETBIoGiwc-WfcCIld").then(
      (response) => {
        console.log("SUCCESS!", response);
        setValues({
          fullName: "",
          email: "",
          role: "",
          message: ""
        });
        setStatus("SUCCESS");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="relative flex flex-col justify-center">
      <div className="m-2 w-full p-14 lg:max-w-xl">
        <h1 className="text-center text-3xl font-semibold uppercase text-slate-800 ">
          Pongámonos en contacto
        </h1>
        {status && renderAlert()}
        <form onSubmit={handleSubmit}>
          <InputField
            value={values.fullName}
            handleChange={handleChange}
            name="fullName"
            type="text"
          />
          <InputField2
            value={values.email}
            handleChange={handleChange}
            label="E-Mail"
            name="email"
            type="email"
          />
          <SelectField handleChange={handleChange} name="role" label="Role" />
          <TextareaField
            value={values.message}
            handleChange={handleChange}
            label="Your message here"
            name="message"
          />
          <button
            type="submit"
            className="
            focus:shadow-outline
            h-10
            rounded-lg
            bg-slate-800
            px-5
            text-indigo-100
            transition-colors
            duration-150
            hover:bg-slate-900"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className="mb-5 rounded bg-blue-100 px-4 py-3 text-center leading-normal text-blue-700">
    <p>Se envió correctamente tu consulta</p>
  </div>
);

export default Contact;
