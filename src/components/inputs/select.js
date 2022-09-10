import { style } from "./style";

export const InputSelect = ({ label, options, publisher, value, action }) => {
  return (
    <>
      <div className="relative">
        <select
          id={label}
          className={style.input}
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
          className={style.label}
        >
          {label}
        </label>
      </div>
    </>
  );
};