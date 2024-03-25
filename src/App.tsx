import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { RegionsPage } from "./pages/RegionsPage";
import { Footer } from "./components/Footer/Footer";
import { HistoryPage } from "./pages/HistoryPage";
import { CulturePage } from "./pages/CulturePage";
import { Language } from "./pages/Language";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/regions" element={<RegionsPage />} />
        <Route path="/history">
          <Route index element={<HistoryPage />} />
        </Route>
        <Route path="/culture">
          <Route index element={<CulturePage />} />
          <Route path="language" element={<Language />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
