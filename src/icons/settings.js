export const SettingsIcon = ({ active }) => {
  return (
    <>
      <svg viewBox="0 0 20 20" className={`fill-none  h-[1.4rem] w-[1.4rem]`}>
        <g
          className={
            `${active === "Settings" ? "stroke-primary fill-primaryLightest" : "stroke-jwBlack fill-transparent"} stroke-[.8] `
          }
          fill="none"
        >
          <path
            d="m17.4 11 .1-1-.1-1 2.1-1.7c.2-.2.2-.4.1-.6l-2-3.5c-.1-.1-.3-.2-.6-.1l-2.5 1-1.7-1-.4-2.6c.1-.3-.2-.5-.4-.5H8c-.2 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L3 3.1c-.3-.1-.5 0-.7.2l-2 3.5c-.1.1 0 .4.2.6L2.6 9l-.1 1 .1 1-2.1 1.7c-.2.2-.2.4-.1.6l2 3.5c.1.1.3.2.6.1l2.5-1 1.7 1 .4 2.6c0 .2.2.4.5.4h4c.2 0 .5-.2.5-.4l.4-2.6 1.7-1 2.5 1c.2.1.5 0 .6-.2l2-3.5c.1-.2.1-.5-.1-.6ZM10 13.5A3.5 3.5 0 0 1 6.5 10c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
            transform="matrix(.948 0 0 .948 .5 .5)"
          />
        </g>
      </svg>
    </>
  );
};
