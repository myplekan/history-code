import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { RegionsPage } from "./pages/RegionsPage";
import { Footer } from "./components/Footer/Footer";
import { HistoryPage } from "./pages/HistoryPage";
import { CulturePage } from "./pages/CulturePage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/culture" element={<CulturePage />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
