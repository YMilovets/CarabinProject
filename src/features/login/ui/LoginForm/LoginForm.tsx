"use client";

import React, { SubmitEvent } from "react";
import { TextField } from "@mui/material";

import { Form } from "@/src/shared";

function LoginForm() {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    console.log(new FormData(e.currentTarget));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField name="username" label="Имя пользователя" variant="outlined" />
      <TextField
        name="password"
        label="Пароль"
        variant="outlined"
        type="password"
      />
    </Form>
  );
}

export default LoginForm;
