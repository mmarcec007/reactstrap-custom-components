import React from "react";
import { FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

const reactStrapElement = props => {

    var valid = '';
    if (props.invalid && props.shouldValidate && props.touched) {
        valid = 'invalid';
    }

    let input = <Input
        invalid={valid}
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
    />;

    if (props.type === 'select') {
        input = <Input
                    invalid={valid}
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}>
                        {props.options.map(option => { return <option key={option.displayValue}>{option.displayValue}</option>} )}
                </Input>;
    }

    return (
      <FormGroup>
          <Label>{props.label}</Label>
          {input}
          <FormFeedback invalid={valid}>{props.validationMessage}</FormFeedback>
          <FormText>{props.formText}</FormText>
      </FormGroup>
    )
};

export default reactStrapElement;
