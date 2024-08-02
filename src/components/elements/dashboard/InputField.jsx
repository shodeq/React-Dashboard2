/* eslint-disable react/prop-types */
const InputField = ({ id, name, type, placeholder, ariaLabel, className }) => (
    <div className={className}>
        <label className="block text-sm text-gray-600" htmlFor={id}>{placeholder}</label>
        <input
            className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id={id}
            name={name}
            type={type}
            required
            placeholder={placeholder}
            aria-label={ariaLabel}
        />
    </div>
);

export default InputField;
