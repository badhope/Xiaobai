import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import CourseDetail from './pages/CourseDetail';
import SearchPage from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
