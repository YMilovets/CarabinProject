"use client";

import React from "react";

import { useSystemTheme } from "@/src/shared/hooks";

import { MainLayoutProps } from "./types";

import styles from "./MainLayout.module.css";

function MainLayout({ children }: MainLayoutProps) {
	useSystemTheme();
	return <main className={styles.main}>{children}</main>;
}

export default MainLayout;
