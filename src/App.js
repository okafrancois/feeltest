import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import feelityLogo from "./img/logo-feeltest.png";

function App() {
  return (
    <div className="App">
        <header>
            <a href="/" className={"back-link"}>
                <svg className={"btn-icon"} id="arrow-left" viewBox="0 0 54 85" fill="none">
                    <path fill={"#000"} d="M0.812416 44.4482L41.6227 0.947431C42.7438 -0.247534 44.6162 -0.321987 45.8286 0.780195L52.4 6.7542C53.6351 7.87703 53.7162 9.79208 52.5805 11.0153L22.9113 42.9689C21.745 44.225 21.8665 46.2013 23.1778 47.3052L52.4163 71.9188C53.657 72.9632 53.843 74.8045 52.8364 76.076L47.0596 83.373C46.0103 84.6985 44.0735 84.8956 42.7787 83.8086L1.07151 48.7985C-0.247307 47.6915 -0.365677 45.7039 0.812416 44.4482Z"/>
                </svg>
            </a>
            <a href="/" className={"logo"}> <img src={feelityLogo} alt={""}/> </a>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
