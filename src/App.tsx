import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import ProjectCaseStudy from "./pages/ProjectCaseStudy/index";

export default function App() {
 return (
  <>
    <ScrollToTop />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectCaseStudy />} />
    </Routes>
  </>
 )
}