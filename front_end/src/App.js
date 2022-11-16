import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screen/landingpage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyBlog from "./screen/Myblog/MyBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/myblog" element={<MyBlog />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
