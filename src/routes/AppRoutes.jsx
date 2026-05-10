
import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
// import Footer from '../components/Footer'
import About from '../pages/About';
import Books from '../pages/Books';
import Contact from '../pages/Contact';
import WriterZone from '../pages/WriterZone';
import LoginRegister from '../pages/LoginRegister';

import Articles from '../pages/Articles';
import NewRegister from '../pages/NewRegister';

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
      <Route path='/auth' element={<LoginRegister/>}/>
      <Route path='/newregister' element={<NewRegister/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes