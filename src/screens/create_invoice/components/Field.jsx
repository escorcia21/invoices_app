export default function Field({ name, label, type, value, handleChange, errors }) {
    return (
        <div className="form__field">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className="form-control"
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
            />
            {/* {errors[name] && <span className="text-danger">This field is required</span>} */}
        </div>
    );
}