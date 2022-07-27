const textInput = (field, index, handleFocus, handleOnBlur) => (
    <>
        {field.focused && <label htmlFor={field.name}>{field.label}</label>}
        <input
            type="text"
            placeholder={field.focused ? field.placeholder : field.label}
            // {...register(`${field.name}`, { required: true })}
            onFocus={ () => handleFocus(index)}
            onBlur={ () => handleOnBlur(index)}
        />
    </>
);

const selectInput = (field, index) => (          
    <>
        <select
            // {...register(`${field.name}`, { required: true })}
        >
            {field.options.map(option =>             // option has value, and Text selected 
            <option value={option} selected={field.selected}>{option}</option>
                )}
        </select>
    </>
)

const dateInput = (field) => {
    <>
        <input
            // {...register(`${field.name}`, { required: true })}
            type="date"
        />
    </>
}

const fieldsMapped = {
    'textInput': (props) => textInput(props.field, props.index, props.handleFocus, props.handleOnBlur),
    'selectInput': (props) => selectInput(props.field, props.index, props.handleFocus, props.handleOnBlur),
    'dateInput': (props) => dateInput(props.field)
}

export default fieldsMapped;