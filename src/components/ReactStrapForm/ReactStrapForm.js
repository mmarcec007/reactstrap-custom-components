import React, {Component} from 'react';
import ReactStrapElement from './ReactStrapElement';
import {checkValidity} from "../../shared/util";
import { Form, Button } from "reactstrap";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import {addEventListenerToElement} from "./Util/util";
import {mayasForm} from "../../constants/Forms/MayasForm";

class ReactStrapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig: this.props.formConfig,
            formIsValid: false
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const formValuesArray = [];
        for (let key in this.state.formConfig.formFields) {
            formValuesArray.push({
                id: key,
                value: this.state.formConfig.formFields[key].value
            });
        }

        const newPost = {};
        for (let val in formValuesArray) {
            let key = formValuesArray[val].id;
            newPost[key] = formValuesArray[val].value;
        }

        this.props.getFromSubmit(newPost);
    };

    handleCancel = () => {
        let formConfig = Object.assign({}, this.state.formConfig);
        for (let key in this.state.formConfig.formFields) {
            formConfig.formFields[key].value = '';
            formConfig.formFields[key].valid = false;
            formConfig.formFields[key].touched = false;
        }

        this.setState({ formConfig: formConfig, formIsValid: false });
    };

    handleChange = (event, inputIdentifier) => {
        let formConfig = Object.assign({}, this.state.formConfig.formFields);
        formConfig[inputIdentifier].value = event.target.value;
        formConfig[inputIdentifier].valid = checkValidity(
            event.target.value,
            this.state.formConfig.formFields[inputIdentifier].validation
        );
        formConfig[inputIdentifier].touched = true;

        let validForm = false;
        let count = 0;
        let formFields = Object.keys(formConfig);

        formFields.forEach(key => {
            if (formConfig[key].valid) {
                count++;
            }
        });

        if (count === formFields.length) {
            validForm = true;
        }
        this.setState({ formIsValid: validForm });
    };

    componentDidMount() {
        // bind event listeners to form buttons
        addEventListenerToElement(mayasForm.formName, 'submit', (event) => this.handleSubmit(event));
        addEventListenerToElement(mayasForm.formButtons.cancel.id,
            'click', () => this.handleCancel());
    }

    render() {
        // form elements
        const formElementsArray = [];
        for (let key in this.state.formConfig.formFields) {
            formElementsArray.push({
                id: key,
                config: this.state.formConfig.formFields[key]
            });
        }
        // form buttons formButtons
        const buttons = [];
        for (let key in this.state.formConfig.formButtons) {
            buttons.push({
                id: key,
                config: this.state.formConfig.formButtons[key]
            });
        }

        return (
            <Form id={this.state.formConfig.formName}>
                {formElementsArray.map(formElement => (
                    <ReactStrapElement
                        key={formElement.id}
                        type={formElement.config.type}
                        name={formElement.config.name}
                        id={formElement.config.id}
                        placeholder={formElement.config.placeholder}
                        onChange={event => this.handleChange(event, formElement.id)}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        invalid={!formElement.config.valid}
                        validationMessage={formElement.config.validationMessage}
                        value={formElement.config.value}
                        formText={formElement.config.formText}
                    />
                ))}
                <ButtonGroup>
                    {buttons.map(formButton => (
                        <Button disabled={!this.state.formIsValid && !formButton.config.active ? 'disabled' : ''}
                                color={formButton.config.color}
                                type={formButton.config.type}
                                id={formButton.config.id}>
                        {formButton.config.label}</Button>
                    ))}
                </ButtonGroup>
            </Form>
        )
    }
}

export default ReactStrapForm;