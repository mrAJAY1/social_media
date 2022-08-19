import "./App.css";
import SignupContext from "./contexts/SignupContext";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div>
      <SignupContext>
        <Signup></Signup>
      </SignupContext>
    </div>
  );
}

export default App;
