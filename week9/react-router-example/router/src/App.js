import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import About from "./components/About";
import Post from "./components/Post";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<h4>404 not found</h4>} />
      </Routes>
    </div>
  );
}

export default App;
