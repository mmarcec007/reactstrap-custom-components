import React, {Component} from 'react';
import ReactStrapElement from './ReactStrapElement';
import {checkValidity} from "../../shared/util";
import { Form, Button } from "reactstrap";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import {addEventListenerToElement} from "./Util/util";

class ReactStrapForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formConfig: this.props.formConfig,
            formFields: this.formFields(props),
            formButtons: this.formButtons(props),
            formIsValid: false
        };
    };

    formButtons = (props) => {
        const buttons = [];
        for (let key in props.formConfig.formButtons) {
            buttons.push({
                id: key,
                config: props.formConfig.formButtons[key]
            });
        }
        return buttons;
    };

    formFields = (props) => {
        // setup form fields from provided config on instantiation
        const formElementsArray = [];
        for (let key in props.formConfig.formFields) {
            props.formConfig.formFields[key].valid = false;
            props.formConfig.formFields[key].touched = false;
            props.formConfig.formFields[key].id = key;
            props.formConfig.formFields[key].name = key;
            formElementsArray.push({
                id: key,
                config: props.formConfig.formFields[key]
            });
        }
        return formElementsArray;
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const formValuesArray = this.state.formFields;
        const newPost = {};
        for (let val in formValuesArray) {
            let key = formValuesArray[val].id;
            newPost[key] = formValuesArray[val].config.value;
        }

        if (this.props.getDataFromSubmit) {
            this.props.getDataFromSubmit(newPost);
        }
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
        addEventListenerToElement(this.state.formConfig.formName, 'submit', (event) => this.handleSubmit(event));
        addEventListenerToElement(this.state.formConfig.formButtons.cancel.id,
            'click', () => this.handleCancel());
    };

    render() {
        return (
            <Form id={this.state.formConfig.formName}>
                {this.state.formFields.map(formElement => (
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
                        options={formElement.config.options}
                    />
                ))}
                <ButtonGroup>
                    {this.state.formButtons.map(formButton => (
                        <Button disabled={!this.state.formIsValid && !formButton.config.active}
                                key={formButton.config.id}
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