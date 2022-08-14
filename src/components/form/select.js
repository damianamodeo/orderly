import { PublishersIcon } from "../../icons/publishers";

export const InputSelect = ({ label, options, value, action }) => {
  return (
    <>
      <div className="relative">
        <select
          id="underline_select"
          class="
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
        >
          {options.map(option => (
            <option value={option.id}>{option.lastName}, {option.firstName}</option>
          ))}
          <option value="US"></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <label
          for="floating_filled"
          class="
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
