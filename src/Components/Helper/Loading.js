import React from 'react';
import styles from './Loading.module.css';
import { ReactComponent as FOTO } from '../Assets/carregando.svg';

const Loading = ({ loading }) => {
  return (
    <p className={`${styles.loading}`}>
      <svg>
        <FOTO />
      </svg>
    </p>
  );
};

export default Loading;
