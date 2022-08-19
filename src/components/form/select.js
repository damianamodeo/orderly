import { PublishersIcon } from "../../icons/publishers";
import { baseInputStyle } from "../../services/styles/formInputs";

export const InputSelect = ({ label, options, publisher, value, action }) => {
  return (
    <>
      <div className="relative">
        <select
          id={label}
          className={baseInputStyle}
          onChange={action}
          value={value}
        >
          {(publisher.id !== publisher.familyHead)}
          <option value={publisher.id}>
            {publisher.lastName}
            {publisher.firstName && publisher.lastName ? "," : null}{" "}
            {publisher.firstName}
          </option>
          {options?.map(({ id, lastName, firstName }) =>
            id === publisher.familyHead ? (
              <option key={id} value={id}  >
                {lastName}, {firstName}
              </option>
            ) : (
              <option key={id} value={id}>
                {lastName}, {firstName}
              </option>
            )
          )}
        </select>
        <label
          htmlFor={label}
          className="
            absolute 
            top-4 left-2.5 z-10 
            origin-[0] 
            -translate-y-4 
            scale-75 
            transform 
            text-base 
            text-gray-500 
            duration-300 
            peer-placeholder-shown:translate-y-0 
            peer-placeholder-shown:scale-100 
            peer-focus:-translate-y-4 
            peer-focus:scale-75 
            peer-focus:text-primary
            dark:text-gray-400 
            peer-focus:dark:text-primaryLight
            "
        >
          {label}
        </label>
      </div>
    </>
  );
};
