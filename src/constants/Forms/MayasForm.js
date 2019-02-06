export const mayasForm = {
    formName: 'mayasPost',
    formFields: {
        title: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Title",
            formText: "Please enter a title",
            validationMessage:
                "Title length should be between 5 and 100 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 100
            }
        },
        display: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Display",
            formText: "Please enter a display name",
            validationMessage:
                "Display Name length should be between 5 and 100 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 100
            }
        },
        desc: {
            field: "input",
            type: "textarea",
            value: "",
            placeholder: "Description",
            formText: "Please enter a description",
            validationMessage:
                "Description length should be between 5 and 255 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 255
            }
        },
        tags: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Tags",
            formText: "Please enter some tags (eg.#example)",
            validationMessage:
                "Maximal 5 tags are allowed and/or make sure to include # as tag separator.",
            validation: {
                required: true,
                minLength: 1,
                maxLength: 5,
                isArrayValue: true
            }
        },
        number: {
            field: "input",
            type: "number",
            value: "",
            placeholder: "Number",
            formText: "Please specify a number",
            validationMessage: "Please make sure to enter a positive value.",
            validation: {
                required: true,
                minLength: 1,
                maxLength: 5
            }
        },
        deliveryMethod: {
            field: 'input',
            type: "select",
            options: [
                {value: 'fastest', displayValue: 'Fastest'},
                {value: 'cheapest', displayValue: 'Cheapest'}
            ],
            value: 'fastest',
            validation: {}
        }
    },
    formButtons: {
        submit: {
            color: "primary",
            label: "Submit",
            type: 'submit',
            id: 'submitPost',
            active: false
        },
        cancel: {
            color: "secondary",
            label: 'Cancel',
            type: 'reset',
            id: 'resetPost',
            active: true
        }
    }
};
