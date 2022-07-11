import React from "react";
import { Form } from "react-bootstrap";

function MyInput({ label, inputTyp, myPlaceHlder, hint, value, setValue }) {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={inputTyp}
        placeholder={myPlaceHlder}
      />
      {hint !== undefined && hint !== "" && (
        <Form.Text className="text-muted">{hint}</Form.Text>
      )}
    </>
  );
}

export default MyInput;
