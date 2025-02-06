export function Boiling(props) {
  if (props.celcius >= 100) {
    return <p>The water will boil</p>;
  }
  return <p>The water will not boil</p>;
}
