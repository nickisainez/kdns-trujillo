const SelectField = (props) => {
  const { handleChange, name } = props;
  return (
    <div className="mb-2">
      <label htmlFor={name}></label>
      <select
        onChange={handleChange}
        defaultValue="role"
        name={name}
        className="
            mt-6
            block w-full rounded-md border-gray-300
            px-4
            py-2
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50"
      >
        <option value="role" disabled>
          Tipo de consulta
        </option>
        <option value="Cotizar" className="py-1">
          Cotizar
        </option>
        <option value="Información sobre la empresa" className="py-1">
          Información sobre la empresa
        </option>
        <option value="Coordinar una reunión" className="py-1">
          Coordinar una reunión
        </option>
        <option value="Propuesta de negocio" className="py-1">
          Propuesta de negocio
        </option>
        <option value="Otros" className="py-1">
          Otros
        </option>
      </select>
    </div>
  );
};

export default SelectField;
