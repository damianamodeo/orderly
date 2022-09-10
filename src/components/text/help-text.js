export const HelpText = ({addStyle, children}) => {
  return (
    <span className={"inline-block align-baseline dark:text-white " + addStyle}>{children}</span>
  )
}