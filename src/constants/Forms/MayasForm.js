export const mayasForm = {
    formName: 'mayasPost',
    formFields: {
        title: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Title",
            name: "title",
            id: "title",
            formText: "Please enter a title",
            validationMessage:
                "Title length should be between 5 and 100 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 100
            },
            valid: false,
            touched: false
        },
        display: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Display",
            name: "display",
            id: "display",
            formText: "Please enter a display name",
            validationMessage:
                "Display Name length should be between 5 and 100 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 100
            },
            valid: false,
            touched: false
        },
        desc: {
            field: "input",
            type: "textarea",
            value: "",
            placeholder: "Description",
            name: "description",
            id: "description",
            formText: "Please enter a description",
            validationMessage:
                "Description length should be between 5 and 255 characters.",
            validation: {
                required: true,
                minLength: 5,
                maxLength: 255
            },
            valid: false,
            touched: false
        },
        tags: {
            field: "input",
            type: "text",
            value: "",
            placeholder: "Tags",
            name: "tags",
            id: "tags",
            formText: "Please enter some tags (eg.#example)",
            validationMessage:
                "Maximal 5 tags are allowed and/or make sure to include # as tag separator.",
            validation: {
                required: true,
                minLength: 1,
                maxLength: 5,
                isArrayValue: true
            },
            valid: false,
            touched: false
        },
        number: {
            field: "input",
            type: "number",
            value: "",
            placeholder: "Number",
            name: "number",
            id: "number",
            formText: "Please specify a number",
            validationMessage: "Please make sure to enter a positive value.",
            validation: {
                required: true,
                minLength: 1,
                maxLength: 5
            },
            valid: false,
            touched: false
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
