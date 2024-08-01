import { equal, length } from "./javascript";
import { firstLetterToUppercase, emailValidation, number, passwordValidation, otpCodeValidation } from "./regex";

export const allValidations = (name, value, state, ignore = []) => {
    const formErrors = { ...state.formErrors };
    if (ignore.includes(name)) {
        if (formErrors[name]) formErrors[name] = "";
        return formErrors;
    }
    switch (name) {
        case "email":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else if (!emailValidation(value)) {
                formErrors[name] = `Please enter valid email!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "password":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else if (!passwordValidation(value)) {
                formErrors[
                    name
                ] = `Please enter a password with 8-16 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "name":
        case "title":
        case "iosPlanId":
        case "androidPlanId":
        case "tagLine":
        case "description":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "otpCode":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else if (!otpCodeValidation(value)) {
                formErrors[name] = `Enter Valid OTP!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "confirmPassword":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else if (state.password !== value) {
                formErrors[name] = `Enter valid password`;
            } else {
                formErrors[name] = "";
            }
            break;

        case "color":
        case "subCategory":
            if (equal(length(value))) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "role":
        case "whatYouExpect":
        case "howToMeditate":
        case "features":
        case "coverImage":
        case "music":
        case "tracks":
        case "suppliers":
            if (!value.length) {
                formErrors[name] = `${firstLetterToUppercase(name)} are required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "qty":
        case "noOflabels":
        case "capacityPerHour":
            if (!number(value)) {
                formErrors[name] = `${firstLetterToUppercase(name)} are required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "operation":
        case "season":
        case "classType":
        case "group":
        case "jobPosition":
        case "sole":
        case "supplier":
        case "unit":
        case "material":
            if (!value.name) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "tool":
            if (!value.code) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else {
                formErrors[name] = "";
            }
            break;

        case "level":
        case "price":
        case "days":
        case "type":
            if (!value) {
                formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "vehicleBrand":
            if (!value) {
                formErrors[name] = `Vehicle Brand is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        case "firstName":
            if (!value) {
                formErrors[name] = `First Name is required!`;
            } else {
                formErrors[name] = "";
            }
            break;
        // case "image":
        //     if (!value) {
        //         formErrors[name] = `${firstLetterToUppercase(name)} is required!`;
        //     }
        //     else {
        //         formErrors[name] = "";
        //     }
        //     break;

        default:
            break;
    }

    return formErrors;
};
