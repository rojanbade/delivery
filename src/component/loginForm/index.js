import React, { createRef } from "react";

const LoginForm = () => {
  const fileInput = createRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
    console.log(fileInput.current.files[0]);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileInput} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
