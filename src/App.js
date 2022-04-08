import Home from "./page/Home";
import AboutApp from "./page/AboutApp";
import AboutAuthor from "./page/AboutAuthor";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./page/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/about-app" element={<AboutApp />} />
          <Route path="/about/about-author" element={<AboutAuthor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
