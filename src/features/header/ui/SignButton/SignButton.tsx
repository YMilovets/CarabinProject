"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

import { Pages } from "@/src/shared";

import ButtonLink from "../ButtonLink";

function SignButton() {
	const t = useTranslations("loginPage");
	const { data } = useSession();

	if (data) return null;
	return <ButtonLink path={Pages.Login}>{t("title")}</ButtonLink>;
}

export default SignButton;
