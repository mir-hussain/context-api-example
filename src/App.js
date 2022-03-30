import "./App.css";
import FirstComponent from "./Components/FirstComponent/FirstComponent";
import SecondComponent from "./Components/SecondComponent/SecondComponent";
import ThirdComponent from "./Components/ThirdComponent/ThirdComponent";

function App() {
  return (
    <div className='app'>
      <div>
        <h1>App</h1>
      </div>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

export default App;
