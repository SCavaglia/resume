import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Contact from "./pages/contact";

import AideConfort from "./pages/demos/aide-confort";
import AtelierCreation from "./pages/demos/atelier-creation";
import BistrotGourmand from "./pages/demos/bistrot-gourmand";
import BtpPro from "./pages/demos/btp-pro";
import EchappeeBelle from "./pages/demos/echappee-belle";
import EdenPaysage from "./pages/demos/eden-paysage";
import Fitzone from "./pages/demos/fitzone";
import GaragePro from "./pages/demos/garage-pro";
import MaisonNouvelle from "./pages/demos/maison-nouvelle";
import MaisonReve from "./pages/demos/maison-reve";
import NovaSante from "./pages/demos/nova-sante";
import PattesCoeurs from "./pages/demos/pattes-coeurs";
import SalonLumieres from "./pages/demos/salon-lumieres";
import StudioMomentum from "./pages/demos/studio-momentum";
import SynergieConseil from "./pages/demos/synergie-conseil";
import { Toaster } from "./components/ui/toast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/demos/aide-confort" element={<AideConfort />} />
        <Route path="/demos/atelier-creation" element={<AtelierCreation />} />
        <Route path="/demos/bistrot-gourmand" element={<BistrotGourmand />} />
        <Route path="/demos/btp-pro" element={<BtpPro />} />
        <Route path="/demos/echappee-belle" element={<EchappeeBelle />} />
        <Route path="/demos/eden-paysage" element={<EdenPaysage />} />
        <Route path="/demos/fitzone" element={<Fitzone />} />
        <Route path="/demos/garage-pro" element={<GaragePro />} />
        <Route path="/demos/maison-nouvelle" element={<MaisonNouvelle />} />
        <Route path="/demos/maison-reve" element={<MaisonReve />} />
        <Route path="/demos/nova-sante" element={<NovaSante />} />
        <Route path="/demos/pattes-coeurs" element={<PattesCoeurs />} />
        <Route path="/demos/salon-lumieres" element={<SalonLumieres />} />
        <Route path="/demos/studio-momentum" element={<StudioMomentum />} />
        <Route path="/demos/synergie-conseil" element={<SynergieConseil />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
