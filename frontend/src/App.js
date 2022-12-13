import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import SingleBlog from "./pages/SingleBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/single-blog/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
