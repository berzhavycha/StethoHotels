import React from 'react'

const InputElement = ({ type, id, isRequired, formData, formError, handleInputChange }) => {

    const splitCamelCase = (string) => {
        const newString = string.split('').map(char => {
            if (char.toLowerCase() !== char) {
                return ' ' + char
            }

            return char
        }).join('')

        return newString[0].toUpperCase() + newString.slice(1)
    }

    return (
        <div className="form-block">
            <label htmlFor="firstName">{splitCamelCase(id)} {isRequired && <span className='red'>*</span>}</label>
            <input
                type={type}
                id={id}
                value={formData[id]}
                data-testid={id}
                name={id}
                onChange={handleInputChange}
            />
            {formError?.[id] && <span data-testid={'error-message'} className="red">{formError[id]}</span>}
        </div>
    )
}

export default InputElement
