/**
 * InputForm
 */
import React from 'react';
/**
 * styles
 */
import styles from './style.module.css';

export const InputForm = (props: any) => {
  const { inputValue, placeholder, handleChangeValue } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      className={styles.from}
    />
  );
};
