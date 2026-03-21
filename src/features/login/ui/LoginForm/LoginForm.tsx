"use client";

import React, { SubmitEvent } from "react";
import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";

import { Form } from "@/src/shared";

function LoginForm() {
  const t = useTranslations("loginPage");
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    console.log(new FormData(e.currentTarget));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField name="username" label={t("username")} variant="outlined" />
      <TextField
        name="password"
        label={t("password")}
        variant="outlined"
        type="password"
      />
    </Form>
  );
}

export default LoginForm;
