import React, { useEffect, useState } from 'react'

const useValidation = (value, validations) => {
    const [inputValid, setInputValid] = useState(false)
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength': 
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => { 
        if (isEmpty || minLengthError || maxLengthError || emailError) {
            setInputValid(true)
        } else {
            setInputValid(false)
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError])

    return {
        minLengthError,
        maxLengthError,
        isEmpty,
        emailError
    }
}

export default useValidation
