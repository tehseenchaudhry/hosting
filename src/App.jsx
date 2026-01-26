import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/common/Layout";

// Pages
import Hosting from "./pages/Hosting";
import Linux from "./pages/Linux";
import Window from "./pages/Window";
import Shared from "./pages/Shared";
import Cloud from "./pages/Cloud";
import Dedicated from "./pages/Dedicated";
import Ecommerce from "./pages/Ecommerce";
import WordPress from "./pages/WordPress";
import Multi from "./pages/Multi";
import Mon from "./pages/Mon";
import Mail from "./pages/Mail";
import Genious from "./pages/Genious";
import Google from "./pages/Google";
import Micro from "./pages/Micro";
import Anti from "./pages/Anti";
import Ssl from "./pages/Ssl";
import Sectigo from "./pages/Sectigo";
import Digicert from "./pages/Digicert";
import GeoTrust from "./pages/GeoTrust";
import Thawte from "./pages/Thawte";

function App() {

  // ✅ AOS INITIALIZATION (ONLY ADDITION)
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route path="/"element={<Hosting />} />

          {/* Hosting */}
          <Route path="hosting" element={<Hosting />} />
          <Route path="hosting/linux-shared" element={<Linux />} />
          <Route path="hosting/windows-shared" element={<Window />} />
          <Route path="hosting/morocco-shared" element={<Shared />} />
          <Route path="hosting/cloud" element={<Cloud />} />
          <Route path="hosting/dedicated" element={<Dedicated />} />
          <Route path="hosting/ecommerce" element={<Ecommerce />} />
          <Route path="hosting/wordpress" element={<WordPress />} />
          <Route path="hosting/multi-site" element={<Multi />} />
          <Route path="hosting/monentreprise" element={<Mon />} />

          {/* Mail */}
          <Route path="/mail-solutions" element={<Mail />} />
          <Route path="mail-solutions/genious-mail" element={<Genious />} />
          <Route path="mail-solutions/google-workspace" element={<Google />} />
          <Route path="mail-solutions/microsoft-365" element={<Micro />} />
          <Route path="mail-solutions/anti-spam" element={<Anti />} />

          {/* SSL */}
          <Route path="/ssl" element={<Ssl />} />
          <Route path="/ssl/sectigo" element={<Sectigo />} />
          <Route path="/ssl/digicert" element={<Digicert />} />
          <Route path="/ssl/geotrust" element={<GeoTrust />} />
          <Route path="/ssl/thawte" element={<Thawte />} />

          {/* Dynamic hosting */}
          <Route path="hosting/:type" element={<Hosting />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
