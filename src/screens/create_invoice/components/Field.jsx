export default function Field({ name, label, type, value, handleChange, disabled }) {
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
                required
                disabled={disabled}
            />
        </div>
    );
}