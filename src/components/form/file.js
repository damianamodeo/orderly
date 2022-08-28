export const FileInput = ({ id, label, helpText, types }) => {
  return (
    <>
      <label
        className="mb-2 block text-sm font-medium text-gray-900 xxx-dark:text-gray-300"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="block w-full cursor-pointer  border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none xxx-dark:border-gray-600 xxx-dark:bg-gray-700 xxx-dark:text-gray-400 xxx-dark:placeholder-gray-400"
        aria-describedby="file_input_help"
        id={id}
        type="file"
        accept={types}
      />
      <p
        className="mt-1 text-sm text-gray-500 xxx-dark:text-gray-300"
        id="file_input_help"
      >
        {helpText}
      </p>
    </>
  );
};
