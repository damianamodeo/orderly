import { PublishersIcon } from "../../icons/publishers";

export const InputSelect = ({ label, options, publisher, value, action }) => {
  return (
    <>
      <div className="relative">
        <select
          id="floating_filled"
          className="
            focus:ring-0-XXX 
            peer block 
            w-full 
            appearance-none 
            border-0
            border-b-2
            border-bgDark
            bg-bgLightest 
            px-2.5 
            pb-2.5 
            pt-5 
            text-lg 
            text-gray-900 
            focus:border-b-4
            focus:border-primary 
            focus:outline-none
            dark:border-gray-600 
            dark:bg-gray-700 
            dark:text-white 
            dark:focus:border-primaryLight
            "
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
          htmlFor="floating_filled"
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
