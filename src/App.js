// import logo from "./logo.svg";
import "./App.css";
// import Card from "./component/card";
import { car, user } from "./constant";
// import Button from "./component/button";
// import User from "./component/user";
// import Header from "./component/header";
// import MovieList from "./component/movie";
// import AddMovie from "./component/movie/form";
// import Calculator from "./component/temperature/calculator";
// import FilterableProductTable from "./component/searchProductTable/filterableProductTable";
import Counter from "./component/counter";
import { ThemeContext } from "./context/themeContext";
import React from "react";
import LoginForm from "./component/loginForm";
import { Link, useNavigate } from "react-router";
import MyComponent from "./component/myComponent";

function App() {
  // let name = "Shrajja";
  // const data = {
  //   name: "harsh",
  //   role: "admin",
  //   salary: 100000,
  //   car: ["suzuki", "bmw", "land rover"],
  // };

  const [theme, setTheme] = React.useState(true);
  let navigate = useNavigate();

  const handleCounterClick = () => {
    navigate("/counter");
  };

  return (
    <ThemeContext.Provider value={theme ? "dark" : "light"}>
      <MyComponent />
      {/* <FilterableProductTable /> */}
      {/* <Link to="/counter">Counter</Link> <br />
      <Link to="/movie">Movie</Link>
      <LoginForm />
      <button
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {theme ? "Light" : "Dark"}
      </button>
      <Counter title={10} />
      <div className="user-card">
        {user.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <h1>{data.name}</h1>
              <p> {data.age}</p>
            </React.Fragment>
          );
        })}
      </div>
      <React.Fragment>
        <h1>Testing fragment</h1>
        <p> What does fragment do?</p>
      </React.Fragment>
      <button onClick={handleCounterClick}>Counter</button> */}
      {/* <Calculator /> */}
      {/* <AddMovie />
      <MovieList /> */}
      {/* <header className="App-header">
        <Header title="Class based component" />
        <h1>Hello {name}</h1>
        <Button name="Get started" work="Description" />
        <Button name="Test" work="Testing" />
        <Button name="Click" work="Clicking" />
        <User data={data} />

        <div className="user-card">
          {user.map((data) => {
            return <Card cardData={data} />;
          })}
        </div>
      </header> */}
    </ThemeContext.Provider>
  );
}

export default App;
