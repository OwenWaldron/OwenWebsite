import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import AboutMe from './pages/about-me';
import Projects from './pages/projects';
import NotAPage from './pages/not-a-page';
import ProjectView from './pages/projects/view';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Analytics />
      <Header />
      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='about' element={<AboutMe/>}/>
        <Route path='projects'>
          <Route path='' element={<Projects/>}/>
          <Route path='view/:name' element={<ProjectView/>}/>
        </Route>
        <Route path='*' element={<NotAPage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
