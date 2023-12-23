const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="w-full text-xs lg:text-base flex flex-col justify-center lg:p-2">
      <div className="mb-2">
        <label className="font-bold" htmlFor={name}>{label}</label>
      </div>
      <input className=" border focus:border-main-primary outline-main-primary p-1 lg:p-2 border-main-primary rounded-md w-full" type={type} id={name} name={name} {...formik.getFieldProps(name)} />
      <div className="w-full h-6 lg:h-4">{formik.errors[name] && formik.touched[name] && <span className="text-red-400">{formik.errors[name]}</span>}</div>
    </div>
  );
};

export default Input;
