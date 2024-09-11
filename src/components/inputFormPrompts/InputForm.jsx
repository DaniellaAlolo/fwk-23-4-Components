import React, { useState } from 'react';
import './InputForm.module.css';

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
        <form onSubmit={handleSubmit} className="input-form">
            <label htmlFor="prompt-input" className="input-form-label">{label}</label>
            <input
                type="text"
                id="prompt-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="input-form-input"
            />
            <button type="submit" className="input-form-button">
                Submit
            </button>
        </form>
    );
};

export default InputForm;
