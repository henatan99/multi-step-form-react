import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import './Form.css';

const formFieldsArr = [
    {label: 'First Name *', placeholder: 'Your first name', name: 'first-name'},
    {label: 'Last Name *', placeholder: 'Your last name', name: 'last-name'},
    {label: 'Email *', placeholder: 'Your email address', name: 'email'},
    {label: 'Gender *', placeholder: '', name: 'gender'},
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
                    formFields.map((input, index) => {
                        return (
                          <>
                            {input.focused && <label htmlFor={input.name}>{input.label}</label>}
                            <input 
                                placeholder={input.focused ? input.placeholder : input.label}
                                {...register(`${input.name}`, { required: true })}
                                onFocus={ () => handleFocus(index)}
                                onBlur={ () => handleOnBlur(index)}
                            />
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