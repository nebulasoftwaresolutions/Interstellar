import AppBar from "./components/appbar/AppBar";
import Playground from "./pages/Playground";
import Text from "./components/text/Text";

function App() {
  return (
    <div className="App">
      <AppBar
        title="Interstellar"
        onClick={() => console.log("some logic here")}
      >
        <ul>
          <Text type="li" value="Components" />
          <Text type="li" value="Support" />
          <Text type="li" value="Github" />
        </ul>
      </AppBar>
      <Playground />
    </div>
  );
}

export default App;
