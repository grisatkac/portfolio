import React from 'react'
import useInput from '../hooks/input.hook'

const Input = ({type, name, placeholder, value, onChange, onBlur}) => {
    const input = useInput('', {})

    return (
        <div className="input-field">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
            />
            { (email.isDirty && email.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым</div>}
            { (email.isDirty && email.minLengthError) && <div style={{ color: 'red' }}>Неккоректная длина</div>}
            { (email.isDirty && email.emailError) && <div style={{ color: 'red' }}>Неккоректный email</div>}
        </div>
    )
}

export default Input
