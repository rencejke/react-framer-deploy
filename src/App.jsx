// src/App.jsx
import {Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import Teach from "./components/pages/Teach";
import WhyUs from "./components/pages/WhyUs";
import ReceiveUpdates from "./components/pages/ReceiveUpdates";
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        {/* Page Example **/}
        <Route path="/react-framer-deploy/" element={<Home />} />
        <Route path="/react-framer-deploy/courses" element={<Courses />} />
        <Route path="/react-framer-deploy/teach" element={<Teach />} />
        <Route path="/react-framer-deploy/whyUs" element={<WhyUs />} />
        <Route path="/react-framer-deploy/receiveUpdates" element={<ReceiveUpdates />} />

        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
      </AnimatePresence>
      
  );
}
export default App;