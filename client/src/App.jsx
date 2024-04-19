import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Home from "./pages/Home/Home"
// import About from "./pages/About"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Profile from "./pages/Profile"
// import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import Section2 from "./pages/Home/Section2"
import Section3 from "./pages/Home/Section3"
import Section6 from "./pages/Home/Section6"
import Section7 from "./pages/Home/Section7"
import Notes from "./UserProfile/Notes"
import Citi from "./Mainpage/Veg/Citi"
import Non from "./Mainpage/NonVeg/Non"
import AmdArea from "./Mainpage/Veg/Ahmedabad/AmdArea"
import HLroad from "./Mainpage/Veg/Ahmedabad/HLroad"
import ManekChowk from "./Mainpage/Veg/Ahmedabad/ManekChowk"
import LawGarden from "./Mainpage/Veg/Ahmedabad/LawGarden"
import Municipal from "./Mainpage/Veg/Ahmedabad/Municipal"
import AlakhNoOtlo from "./Mainpage/Veg/Ahmedabad/AlakhNoOtlo"
import SuratArea from "./Mainpage/Veg/Surat/Suratarea"
import Dbigbazar from "./Mainpage/Veg/Surat/Dbigbazar"
import Piplod from "./Mainpage/Veg/Surat/Piplod"
import KiranChowk from "./Mainpage/Veg/Surat/kiranChowk"
import Hirabag from "./Mainpage/Veg/Surat/Hirabag"
import Rarea from "./Mainpage/Veg/Rajkot/Rarea"
import Sarvesh from "./Mainpage/Veg/Rajkot/Sarvesh"
import Kishanpara from "./Mainpage/Veg/Rajkot/Kishanpara"
import Kalavad from "./Mainpage/Veg/Rajkot/Kalavad"
import Varea from "./Mainpage/Veg/Vadodara/Varea"
import Ratri from "./Mainpage/Veg/Vadodara/Ratri"
import Alkapuri from "./Mainpage/Veg/Vadodara/Alkapuri"
import Barea from "./Mainpage/Veg/Bhavnagar/Barea"
import Ghogha from "./Mainpage/Veg/Bhavnagar/Ghogha"
import Nilambag from "./Mainpage/Veg/Bhavnagar/Nilambag"
import Gallery from "./UserProfile/Gallery"
import AmdManekBalaOrder from "./Mainpage/Veg/Ahmedabad/AmdManekBalaOrder"
import PagenotFound from "./UserProfile/PagenotFound"


export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Section2/>}/>
        <Route path="/menu" element={<Section3/>}/>
        <Route path="/blog" element={<Section6/>}/>
        <Route path="/contact" element={<Section7/>}/>
        <Route path="/book/1" element={<AmdManekBalaOrder/>} />
        <Route path="/book/2" element={<PagenotFound/>} />




        <Route path="/memories" element={<Notes/>}/>
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>

        {/* veg */}
        <Route path="/citi" element={<Citi />} />
        <Route path="/nonveg" element={<Non />} />

        {/* amdavad */}
        <Route path="/amdavad-area" element={<AmdArea />} />
        <Route path="/hlroad" element={<HLroad />} />
        <Route path="/manekchowk" element={<ManekChowk />} />
        <Route path="/lawgarden" element={<LawGarden />} />
        <Route path="/municipal-market" element={<Municipal />} />
        <Route path="alakhnootlo" element={<AlakhNoOtlo />} />

        {/* surat */}

        <Route path="/suratarea" element={<SuratArea/>} />
        <Route path="/bigbazargali" element={<Dbigbazar/>} />
        <Route path="/piplod" element={<Piplod/>} />
        <Route path="/kiranchowk" element={<KiranChowk/>} />
        <Route path="/hirabag" element={<Hirabag/>} />

        {/* rajkot */}

        <Route path="/rajkot" element={<Rarea/>} />
        <Route path="/sarveshwar-chowk" element={<Sarvesh/>} />
        <Route path="/kishanpara-Circle" element={<Kishanpara/>} />
        <Route path="/kalavad" element={<Kalavad/>} />

        {/* vadodara */}

        <Route path="/vadodara" element={<Varea/>} />
        <Route path="/ratri-bazar" element={<Ratri/>} />
        <Route path="/alkapuri-road" element={<Alkapuri/>} />

        {/* bhavnagar */}

        <Route path="/bhavnagar-area" element={<Barea/>} />
        <Route path="/ghogha-circle" element={<Ghogha/>} />
        <Route path="/nilambag" element={<Nilambag/>} />


        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
