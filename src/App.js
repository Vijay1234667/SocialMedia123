import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/HomeNavbar';
import Notification from './Component/Notification';
import Messages from './Component/Messages';
import Feeds from './Component/Feeds';
import LoginPage from './Component/LoginPage';
import Posts from './Component/Posts';
import About from './Component/About';
import Photos from './Component/Photos';
import Connections from './Component/Connections';
import SettingPrivacy from './Component/SettingPrivacy';
import A from './Component/A';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<Home />} />
          <Route path="notification" element={<Notification />} />
          <Route path="messages" element={<Messages />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="post" element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="photos" element={<Photos />} />
          <Route path="connections" element={<Connections />} />
          <Route path="A" element={<A />} />
          <Route path="settingprivacy" element={<SettingPrivacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
