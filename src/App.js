import { Routes, Route } from "react-router-dom";
import ImagesIndex from './components/ImagesIndex'
import ImageDetail from './components/ImageDetail'
import './App.css';

export default function App() {
  return (
    <div>
      <h2>Super Fun Photo House</h2>

      <Routes>
          <Route path="/" element={<ImagesIndex />} />
          <Route path="/images/:id" element={<ImageDetail />} />
      </Routes>
    </div>
  );
}
