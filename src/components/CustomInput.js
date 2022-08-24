import { Field } from "formik";

const CustomInput = (props) => {
  return (
    <div className="col-span-2">
      <div className=" text-gray-600 font-medium text-sm mb-1 dark:text-gray-300 ">
        {props.title}
      </div>
      <div>
        <div className={`${props.errors && props.touched ? "mb-0" : "mb-4"}`}>
          <Field
            placeholder={props.placeholder}
            name={props.name}
            className={`${
              props.errors && props.touched
                ? "border-red-500"
                : "border-gray-300"
            }   outline-none dark:text-gray-300  border rounded py-2 font-normal transition-all duration-300 focus:border-indigo-500 dark:border-gray-500 px-3 w-full text-sm text-gray-700 caret-indigo-600 dark:bg-darkmodeSecoundry `}
            {...props}
          />
        </div>
        {props.errors && props.touched ? (
          <div className="pt-2 text-red-500 text-xs">{props.errors}</div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomInput;
