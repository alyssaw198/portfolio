import {Route, Routes} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Layout from './components/layouts/Layout';
import Experience from './components/pages/Experiences';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/portfolio/' element={<Home/>}/>
          <Route path='/portfolio/about-me' element={<About/>}/>
          <Route path='/portfolio/skills' element={<Skills/>}/>
          <Route path='/portfolio/projects' element={<Projects/>}/>
          <Route path='/portfolio/experience' element={<Experience/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
