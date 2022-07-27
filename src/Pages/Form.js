import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import fieldsMapped from '../helpers/FormFields';

import './Form.css';

const formFieldsArr = [
    {field: 'textInput', label: 'First Name *', placeholder: 'Your first name', name: 'first-name'},
    {field: 'textInput', label: 'Last Name *', placeholder: 'Your last name', name: 'last-name'},
    {field: 'textInput', label: 'Email *', placeholder: 'Your email address', name: 'email'},
    {field: 'selectInput', label: 'Gender *', placeholder: '', name: 'gender', options: ['Male', 'Female']},
]

const Form = () => {
    const [formFields, setFormFields] = useState(formFieldsArr);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    const handleFocus = (index) => {
        const copyFields = [...formFields];
        copyFields[index].focused = true; 
        setFormFields(copyFields);
    } 

    const handleOnBlur = (index) => {
        const copyFields = [...formFields];
        copyFields[index].focused = false; 
        setFormFields(copyFields);
    }

    return (
        <div className="formWrapper">
            <h1>Multi Step Form</h1>
            <h2>
                React Material UI multi step form with basic form validation logic.
            </h2>
            <div className="steps">
                <div className="stepsNum">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div className="stepsStr">
                    <h3>First Step</h3>
                    <h3>Second Step</h3>
                    <h3>Confirmation</h3>
                </div>                
            </div>

            <form className='formFields' onSubmit={handleSubmit(onSubmit)}>
                {
                    formFieldsArr.map((field, index) => {
                        const fieldFunc = fieldsMapped[field.field];
                        return (
                          <>
                            {
                                fieldFunc({field: field, index: index, handleFocus: () => handleFocus(index), handleOnBlur: () => handleOnBlur(index) })
                                // textInput(props.field, props.index, props.handleFocus, props.handleOnBlur),
                            }
                          </>
                        )
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;