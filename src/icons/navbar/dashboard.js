import { style } from "./style";

export const DashboardIcon = ({ active }) => {
  return (
    <>
      <svg viewBox="0 0 18 18" className={`fill-none  h-6 w-6`}>
        <rect
          className={
            active === "Dashboard"
              ? style.active
              : style.inactive
          }
          width="17"
          height="12"
          x="2"
          y="4"
          rx=".3"
          ry=".3"
        />
        <g
          className={
            active === "Dashboard" 
            ? style.active
            : style.inactive
          }
          fill="none"
        >
          <g strokeLinecap="round" strokeLinejoin="round" strokeWidth=".8">
            <rect width="15.6" height="11.7" x="2.2" y="4" rx=".3" ry=".3" />
            <path d="M2.5 9.9h15.1M8 4.2v5.5M11.5 7h3.2M5.2 12.9h3.2M11.9 15.5v-5.4" />
          </g>
        </g>
      </svg>
    </>
  );
};
