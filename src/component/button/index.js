function Button(props) {
  const handleClick = () => {
    alert(props.work);
  };
  return (
    <div>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}
export default Button;
