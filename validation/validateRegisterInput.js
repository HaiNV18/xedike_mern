const _ = require('lodash');
const validator = require('validator')

const validateRegisterInput = (data) => {
    let errors = {}

    let {email, password, password2, fullName, phone, DOB} = data;
    if(!email) email = "";
    if(!password) password = "";
    if(!password2) password2 = "";
    if(!fullName) fullName = ""

    // validate email
    if(!validator.isEmail(email)){
        errors.email = "Email is invalid"
    }
    if(validator.isEmpty(email)){
        errors.email = "Email is required"
    }

    // validate password
    if(validator.isLength(password, {min: 0, max: 7})){
        errors.password = "Password must have at least 8 characters"
    }
    if(!validator.equals(password, password2)){
        errors.password2 = "Password must match"
    }

    // validate fullName
    if(validator.isEmpty(fullName)){
        errors.fullName = "Full name is required"
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}

module.exports = validateRegisterInput;