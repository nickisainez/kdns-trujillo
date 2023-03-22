const TextareaField = (props) => {
  const { handleChange, name, value } = props;
  return (
    <div className="mb-2">
      <label htmlFor={name}>
        <textarea
          className="
            mt-6
            mb-6
            block w-full grid-rows-1
            rounded-md
            border-gray-300
            px-4
            py-2
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
          placeholder="Mensaje"
          onChange={handleChange}
          name={name}
          rows="5"
          value={value}
        ></textarea>
      </label>
    </div>
  );
};

export default TextareaField;
