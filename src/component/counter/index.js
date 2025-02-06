import React, { useContext, useReducer } from "react";
import { counterReducer } from "../../reducer/counterReducer";
import { ThemeContext } from "../../context/themeContext";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Counter = ({ title }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const theme = useContext(ThemeContext);

  return (
    <div className={"container-" + theme}>
      <Link to="/">Home</Link>
      <h1>{title}</h1>
      <h1>You clicked {state.count} time</h1>
      <button
        className={"btn-" + theme}
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Add
      </button>

      <button
        className={"btn-" + theme}
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Sub
      </button>

      <button
        className={"btn-" + theme}
        onClick={() => {
          dispatch({ type: "multiply" });
        }}
      >
        Double
      </button>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string,
};

export default Counter;
