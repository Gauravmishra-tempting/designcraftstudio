import './App.css';
import {lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Loader from './components/loader/Loader';

const Home = lazy(() => import("./components/pages/Home"));
const FeatureDesign = lazy(() => import("./components/pages/FeatureDesign"));

const Webdevelopment = lazy(() => import("./components/pages/Webdevelopment"));
// const GraphicDesign = lazy(() => import("./components/pages/GraphicDesign"));


function App() {
  return (
   <Suspense fallback={<Loader/>}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Featuredesign" element={<FeatureDesign />} />
      <Route path="/Webdevelopment" element={<Webdevelopment />} />
      {/* <Route path="/graphicdesign" element={<GraphicDesign />} /> */}
    </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
