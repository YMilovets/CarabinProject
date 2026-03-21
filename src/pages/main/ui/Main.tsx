import React from 'react'
import { Alert } from '@mui/material';

import styles from "./Main.module.css";

function Main() {
  return (
    <section className={styles.root}>
      <Alert variant="outlined" severity="warning">
        Данное приложение находится в разработке
      </Alert>
    </section>
  );
}

export default Main