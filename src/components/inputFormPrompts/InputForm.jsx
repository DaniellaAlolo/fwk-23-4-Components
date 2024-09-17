import React, { useState } from 'react';
import styles from './InputForm.module.css'; // Importera CSS-modulen som ett objekt

const InputForm = ({ label, placeholder, onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(inputValue);
        }
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles['input-form']}>
            <label htmlFor="prompt-input" className={styles['input-form-label']}>{label}</label>
            <input
                type="text"
                id="prompt-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={styles['input-form-input']}
            />
            <button type="submit" className={styles['input-form-button']}>
                Submit
            </button>
        </form>
    );
};

export default InputForm;
