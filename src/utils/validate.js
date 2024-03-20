// rules = {
//     nam: [
//         {required: true}
//     ],
//     email: [
//         {required: true, message: 'Xin vui lòng điền Email'},
//         {regexp: 'email', message: 'Xin vui lòng nhập đúng địa chỉ email'}
//     ]
// }

import { message } from "antd"

// form = {
//     name: 'Truong Dang Ngheo~',
//     email: '20521658@gm.uit.edu.vn'
// }

// errorObject = {
//     email: 'Xin vui lòng nhập đúng địa chỉ email'
// }

const REGEXP = {
    email: /^[\w -\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    url: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
}

const ERROR_MESSAGE = {
    required: 'Please fill this field',
    regexp: 'Field not like format',
    minMax: (min, max) => `Xin vui lòng nhập từ ${min}-${max} ký tự`,
    confirm: (field) => `Xin vui lòng điền giống ${field}`
}

/**
 * 
 * @param {*} rules 
 * @param {*} forms 
 * @returns plan error object
 */

export const validate = (rules, forms) => {
    const errorObject = {}
    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (!forms[name]?.trim()) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.required
                }
            }
            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp]
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp()
                }
                if (!regexp.test(forms[name])) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.regexp
                }
            }
            if (rule.min || rule.max) {
                if (forms[name]?.length < rule.min || forms[name]?.length > rule.max) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.minMax(rule.min, rule.max)
                }
            }

            if (rule.confirm) {
                if (forms[rule.confirm] !== forms[name]) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.confirm(rule.confirm)
                }
            }
        }
    }


    return errorObject
}

export const required = (message) => ({
    message,
    required: true
})

export const regexp = (pattern, message) => ({
    regexp: pattern,
    message
})

export const minMax = (min, max, message) => ({
    min, max, message
})

export const confirm = (field) => ({
    confirm: field
})