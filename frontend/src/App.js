import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Home from "./components/HomePage/Home";
import LoginPage from "./components/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      {localStorage.getItem("users") == undefined ||
      localStorage.getItem("users") == null ? (
        <LoginPage />
      ) : (
        <Home />
      )}
      {/* {<LoginPage />} */}
    </div>
  );
}

export default App;
