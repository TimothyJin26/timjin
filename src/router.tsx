import { Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/Gallery";
import ProjectsPage from "./pages/Projects";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
