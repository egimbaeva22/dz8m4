import React, { useState } from 'react';
import './App.css';

function NameInput() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="name-input-container">
            <h2 className="input-title">Введите ваше имя</h2>
            <label>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    className="name-input-field"
                    placeholder="Введите ваше имя"
                />
            </label>
            <p className="greeting">Привет, {name || 'Гость'}!</p>
        </div>
    );
}

export default NameInput;
