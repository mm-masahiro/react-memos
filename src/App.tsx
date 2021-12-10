import useCountTime from "./customHooks/useCountTime";
import Root from "./object-literal-components";

function App() {
  const count = useCountTime();
  return (
    <div className="App">
      {/* <Root type='TEST1' /> */}
      <p>{count}</p>
    </div>
  );
}

export default App;
