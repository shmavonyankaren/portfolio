import React from "react";
import "./ContactForm.scss";
import { SendButton, TextArea, TextInput } from "../index";
export default function ContactForm({
  name,
  handleChangeInput,
  email,
  message,
  handleSubmit,
  loading,
}) {
  return (
    <div className="app__footer-form app__flex">
      <TextInput
        type={"text"}
        placeholder={"Your Name"}
        name="name"
        value={name}
        handleChangeInput={handleChangeInput}
      />
      <TextInput
        type={"email"}
        placeholder={"Your email"}
        name="email"
        value={email}
        handleChangeInput={handleChangeInput}
      />
      <TextArea message={message} handleChangeInput={handleChangeInput} />
      <SendButton loading={loading} handleSubmit={handleSubmit} />
    </div>
  );
}
