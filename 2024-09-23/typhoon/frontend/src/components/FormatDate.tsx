
type FormatDateProps = {
    timestamp: number | null
}

const FormatDate = ({timestamp}: FormatDateProps) => {
  if (timestamp === null) {
    return <span>-</span>;
  }
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return (
    <span>{date.toLocaleDateString(undefined, options)}</span>

  )
};

export default FormatDate;
