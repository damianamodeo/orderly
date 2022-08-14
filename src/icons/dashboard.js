export const DashboardIcon = ({ active }) => {
  return (
    <>
      <svg viewBox="0 0 20 20" className={`fill-none  h-6 w-6`}>
        <rect
          className={
            active == "Dashboard"
              ? "fill-primaryLightest"
              : "fill-transparent"
          }
          width="15.6"
          height="11.7"
          x="2"
          y="4"
          rx=".3"
          ry=".3"
        />
        <g
          className={
            active == "Dashboard" ? "stroke-primary" : "stroke-jwBlack"
          }
          fill="none"
        >
          <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1">
            <rect width="15.6" height="11.7" x="2.2" y="4" rx=".3" ry=".3" />
            <path d="M2.5 9.9h15.1M8 4.2v5.5M11.5 7h3.2M5.2 12.9h3.2M11.9 15.5v-5.4" />
          </g>
        </g>
      </svg>
    </>
  );
};
