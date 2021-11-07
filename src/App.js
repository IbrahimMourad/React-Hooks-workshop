import "./App.css";
import FullName from "./component/FullName";
import ProfilePhoto from "./component/ProfilePhoto";
import Address from "./component/Address";

function App() {
  return (
    <div className="App">
      <div style={{ marginTop: 30 }} />
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
