const RadioInput = ({ radioOptions, formik, name, label }) => {
  return (
    <>
    <label>{label}</label>
      <div>
        {radioOptions.map((item) => (
          <div key={item.value}>
            <label htmlFor={item.value}>{item.label}</label>
            <input type="radio" id={item.value} name={name} value={item.value} onChange={formik.handleChange} checked={formik.values[name] === item.value} />
          </div>
        ))}
        {formik.errors[name] && formik.touched[name] && <span className="error">{formik.errors[name]}</span>}
      </div>
    </>
  );
};

export default RadioInput;
