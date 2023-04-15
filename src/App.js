import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermOfUse from './pages/TermOfUse';
import HeaderComponent from './components/HeaderComponent';
import { Routes, Route, Outlet } from 'react-router-dom';

//style
import './App.css';

function App() {
  return (
    <div className="App min-h-full">
      {/* <HeaderComponent /> */}
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermOfUse />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
