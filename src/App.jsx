import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import DomainName from "./pages/DomainName";
import RegisterDomainName from "./pages/RegisterDomainName";
import TransferDomainName from "./pages/TransferDomainName";
import DomainExtensions from "./pages/DomainExtensions";
import BrandProtection from "./pages/BrandProtection";
import DomainRetrieval from "./pages/DomainRetrieval";
import DomainBrokerService from "./pages/DomainBrokerService";
import DomainNameReseller from "./pages/DomainNameReseller";
// import Home from "./pages/Home"; // optional if you create later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>

          {/* Home (currently using Hosting as homepage like Genious) */}
          <Route index element={<Hosting />} />

          {/* Hosting main page */}
          <Route path="hosting" element={<Hosting />} />
          <Route path="hosting/linux-shared" element={<Linux />} />
          <Route path="hosting/windows-shared" element={<Window />} />
          <Route path="hosting/morocco-shared" element={<Shared />} />
          <Route path="hosting/cloud" element={<Cloud/>}/>
          <Route path="hosting/dedicated" element={<Dedicated />} />
          <Route path="hosting/ecommerce" element={<Ecommerce />} />
          <Route path="hosting/wordpress" element={<WordPress />} />
          <Route path="hosting/multi-site" element={<Multi />} />
          <Route path="hosting/monentreprise" element={<Mon />} />


          <Route path="domain-names" element={<DomainName/>}/>
          <Route path="domain-names/register" element={<RegisterDomainName/>}/>
          <Route path="domain-names/transfer"  element={<TransferDomainName/>}/>
          <Route path="domain-names/extensions" element={<DomainExtensions/>}/>
          <Route path="domain-names/brand-protection" element={<BrandProtection/>}/>
          <Route path="domain-names/retrieval" element={<DomainRetrieval/>}/>
          <Route path="domain-names/broker" element={<DomainBrokerService/>}/>
          <Route path="domain-names/reseller" element={<DomainNameReseller/>}/>

          <Route path="/mail-solutions" element={<Mail />} />
          <Route path="mail-solutions/genious-mail" element={<Genious />} />
          <Route path="mail-solutions/google-workspace" element={<Google />} />
          <Route path="mail-solutions/microsoft-365" element={<Micro />} />
          <Route path="mail-solutions/anti-spam" element={<Anti />} />
          <Route path="/ssl" element={<Ssl />} />
          <Route path="/ssl/sectigo" element={<Sectigo />} />
          <Route path="/ssl/digicert" element={<Digicert />} />
          <Route path="/ssl/geotrust" element={<GeoTrust />} />
          <Route path="/ssl/thawte" element={<Thawte />} />
          
















          {/* Hosting sub-pages (used by dropdown links) */}
          <Route path="hosting/:type" element={<Hosting />} />

          {/* Example future routes */}
          {/* <Route path="domains" element={<Domains />} /> */}
          {/* <Route path="mail" element={<Mail />} /> */}
          {/* <Route path="ssl" element={<SSL />} /> */}
          {/* <Route path="managed-services" element={<Managed />} /> */}
          {/* <Route path="company" element={<Company />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
