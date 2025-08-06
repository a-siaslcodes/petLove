import "./App.scss";
import icons from "./img/icons/icons.svg";

function App() {
  return (
    <>
      <h2>hello, world</h2>
      <svg width={26} height={26}>
        <use href={`${icons}#icon-x-button`} />
      </svg>
    </>
  );
}

export default App;
