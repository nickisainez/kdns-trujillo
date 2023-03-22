const InputField = (props) => {
  const { handleChange, name, type, value } = props;
  return (
    <div className="mb-2">
      <label htmlFor={name}>
        <input
          className="
           mt-6
           block
           w-full rounded-md border-gray-300
           px-4
           py-2
           shadow-sm
           focus:border-indigo-300
           focus:ring
         focus:ring-indigo-200
         focus:ring-opacity-50"
          placeholder="Nombres y apellidos"
          type={type}
          onChange={handleChange}
          value={value}
          name={name}
          required
        />
      </label>
    </div>
  );
};

export default InputField;
