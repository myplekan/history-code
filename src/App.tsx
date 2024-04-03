import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/HomePage";
import { RegionsPage } from "./pages/RegionsPage";
import { Footer } from "./components/Footer/Footer";
import { HistoryPage } from "./pages/HistoryPage";
import { CulturePage } from "./pages/CulturePage";
import { Language } from "./pages/culturePages/Language";
import { OldRus } from "./pages/historyPages/OldRus";
import { MongolInvasion } from "./pages/historyPages/MongolInvasion";
import { CossackState } from "./pages/historyPages/CossackState";
import { Division } from "./pages/historyPages/Division";
import { Independence } from "./pages/historyPages/Independence";
import { ModernIndependence } from "./pages/historyPages/ModernIndependence";
import { Loader } from "./components/Loader/Loader";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const location = useLocation();
  const currentUrl = location.pathname;

  if (url !== currentUrl) {
    setLoading(true);
    setUrl(currentUrl);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="App overflow-y-hidden">
      <Header />

      {!loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regions" element={<RegionsPage />} />
          <Route path="/history">
            <Route index element={<HistoryPage />} />
            <Route path="old-rus" element={<OldRus />} />
            <Route path="mongol-invasion" element={<MongolInvasion />} />
            <Route path="cossack-state" element={<CossackState />} />
            <Route path="division" element={<Division />} />
            <Route path="independence" element={<Independence />} />
            <Route
              path="modern-independence"
              element={<ModernIndependence />}
            />
          </Route>
          <Route path="/culture">
            <Route index element={<CulturePage />} />
            <Route path="language" element={<Language />} />
          </Route>
        </Routes>
      )}

      <Footer />
    </div>
  );
}
export default App;
