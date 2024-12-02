import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router';

/*CSS*/
import './styles/App.css';
import './styles/index.css';

/*Pages*/
import App from './App.tsx';
import Services from './pages/service.tsx';
import Help from './pages/help.tsx';
import About from './pages/about.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> }/>
      <Route path='/service' element={<Services/> }/>
      <Route path="/about" element={ <About/> }/>
      <Route path='/help' element={<Help/> }/>
    </Routes>
  </BrowserRouter>,
)
