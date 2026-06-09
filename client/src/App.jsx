import Login from "./Login";
import CreateEvent from "./CreateEvent";
import Events from "./Events";
import MyRegistrations from "./MyRegistrations";

function App() {
  return (
    <div className="app">
      <h1>EventHub 🚀</h1>

      <Login />

      <CreateEvent />

      <Events />

      <MyRegistrations />
    </div>
  );
}

export default App;