export const InputText = ({ label, value, action }) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
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
            font-semibold
            text-jwBlack 
            focus:border-b-4
            focus:border-primary 
            focus:outline-none
            dark:border-gray-600-XXX
            dark:bg-gray-700-XXX
            dark:text-white-XXX
            dark:focus:border-primaryLight-XXX
            "
          placeholder=" "
          value={value}
          autoComplete="off"
          onChange={action}
          id={label}
        />
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
            text-jwBlack
            duration-300 
            peer-placeholder-shown:translate-y-2
            peer-placeholder-shown:scale-100 
            peer-focus:-translate-y-4 
            peer-focus:scale-75 
            peer-focus:text-primary
            dark:text-gray-400-XXX
            peer-focus:dark:text-primaryLight
            "
        >
          {label}
        </label>
      </div>
    </>
  );
};
