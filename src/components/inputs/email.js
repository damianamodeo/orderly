import { style } from "./style";

export const InputEmail = ({ label, value, action }) => {
  return (
    <>
      <div className="relative">
        <input
          type="email"
          id={label}
          className={style.input}
          placeholder=" "
          value={value}
          autoComplete="off"
          onChange={action}
        />
        <label
          htmlFor={label}
          className={style.label}
        >
          {label}
        </label>
      </div>
    </>
  );
};
