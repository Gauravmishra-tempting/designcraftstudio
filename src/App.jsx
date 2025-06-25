import './App.css';
import {lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Loader from './components/loader/Loader';

const Home = lazy(() => import("./components/pages/Home"));
const FeatureDesign = lazy(() => import("./components/pages/FeatureDesign"));
const CustomCursor = lazy(() => import("./components/pages/Customcursor"))

const Webdevelopment = lazy(() => import("./components/pages/Webdevelopment"));
const Graphics = lazy(() => import("./components/pages/Graphics"));
const  VideoEditing = lazy(() => import("./components/pages/VideoEditing"));
const Login = lazy(() => import("./components/layout/Login"));
const Signup = lazy(() => import("./components/layout/Signup"));
// const GraphicDesign = lazy(() => import("./components/pages/GraphicDesign"));


function App() {
  return (
   <Suspense fallback={<Loader/>}>
    <BrowserRouter>
    <CustomCursor/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signup />} />
      <Route path="/featuredesign" element={<FeatureDesign />} />
      <Route path="/webdevelopment" element={<Webdevelopment />} />
      <Route path="/graphics" element={<Graphics />} />
      <Route path="/videoEditing" element={<VideoEditing />} />
      {/* <Route path="/graphicdesign" element={<GraphicDesign />} /> */}
    </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
