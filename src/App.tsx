import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OfflineCoursePage from './pages/OfflineCoursePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/courses/indore/offline" replace />} />
        <Route path="/courses/indore/offline" element={<OfflineCoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
