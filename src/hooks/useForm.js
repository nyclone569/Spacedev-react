import { useState } from "react"
import { validate } from "../utils/validate"

/**
 * - Custom hook là hook do user tự định nghĩa
 * - Bên trong custom hook được sử dụng những hook khác
 */

/**
 * @param {*} rules
 * @return values, errors, register, validate
 */

export const useForm = (rules) => {
    const [values, setValues] = useState({})
    const [errors, setError] = useState({})

    const register = (string) => {
        return {
            error: errors[string],
            value: values[string] || '',
            onChange: ev => setValues({ ...values, [string]: ev.target.value })
        }
    }
    const _validate = () => {
        const errorObject = validate(rules, values)
        setError(errorObject)
        return Object.keys(errorObject).length === 0
    }
    const reset = () => {
        setValues({})
    }

    return {
        values,
        errors,
        register,
        validate: _validate,
        reset
    }
}