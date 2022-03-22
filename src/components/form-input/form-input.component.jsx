import '../form-input/form-input.styles.scss'
const FormInput = ({label, HandleChange, ...otherInputProps}) => {
    return (
      <div className="group">
        <input
          className="form-input"
          onChange={HandleChange}
          {...otherInputProps}
        />
        {label ? (
          <label className={`${otherInputProps.value.length ? "shrink" : ""} form-input-label`}>
            {label}
          </label>
        ) : null}
      </div>
    );
}
 
export default FormInput;