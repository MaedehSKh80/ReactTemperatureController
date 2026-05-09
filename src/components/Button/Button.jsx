function Button({ id, btnHandler, inputName }) {
  return (
    <button id={id} onClick={btnHandler}>
      {inputName}
    </button>
  );
}

export default Button;
