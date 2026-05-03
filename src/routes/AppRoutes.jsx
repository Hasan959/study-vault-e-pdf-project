
import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import About from '../pages/About';
import Books from '../pages/Books';
import Contact from '../pages/Contact';
import WriterZone from '../pages/WriterZone';
import GenesisEdu from '../pages/GenesisEdu';
import Articles from '../pages/Articles';

const AppRoutes = () => {
  return (
    <Routes>
       {/* 🔥 Parent route (layout) */}
      <Route element={<MainLayout />}>

      {/* child routes */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/articles' element={< Articles />}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/writerzone' element={ <WriterZone/>}/>
      <Route path='/genesisedu' element={< GenesisEdu/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes