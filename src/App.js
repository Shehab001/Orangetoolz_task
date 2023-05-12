import { RouterProvider } from "react-router-dom";
import "./App.css";
import Todo from "./Components/Todo";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
