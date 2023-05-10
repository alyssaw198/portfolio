import {Route, Routes} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about-me' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
