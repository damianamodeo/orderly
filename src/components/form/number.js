export const InputNumber = ({ label, value, action }) => {
  return (
    <>
      <div className="relative">
        <input
          type="tel"
          id="floating_filled"
          class="peer 
          block w-full 
          appearance-none 
          rounded-t-lg 
          border-0 
          border-b
          border-gray-300 
          bg-gray-50 
          px-2.5 
          pb-2.5 
          pt-5 
          text-lg 
          text-gray-900 
          focus:border-b-2 
          focus:border-primary
          focus:outline-none 
          focus:ring-0 
          dark:border-gray-600 
          dark:bg-gray-700 
          dark:text-white 
          dark:focus:border-primaryLight"
          placeholder=" "
          value={value}
          onChange={action}
        />
        <label
          for="floating_filled"
          class="absolute 
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
          peer-focus:dark:text-primaryLight"
        >
          {label}
        </label>
      </div>
    </>
  );
};
