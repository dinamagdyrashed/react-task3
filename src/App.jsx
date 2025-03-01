import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoDetails from "./components/TodoDetails";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="todo-details/:id" element={<TodoDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
