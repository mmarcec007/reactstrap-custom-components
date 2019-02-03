export const checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isArrayValue) {
        let stringValue = value.trim();
        let length = stringValue.split('#').filter(x => x).length;
        console.log("Tag lengths: " + length);
        isValid = length <= rules.maxLength && stringValue.includes("#");
    }

    return isValid;
};