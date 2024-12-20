import './App.css';
import './index.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PagesLayout from './components/PagesLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Updates from './pages/Updates/Updates';
import Contact from './pages/Contact/Contact';

import AdminLayout from './components/AdminLayout';
import NewspaperRegister from './pages/Admin/NewspaperRegister';
import AdminNewspapers from './pages/Admin/Newspapers';
import AdminUsers from './pages/Admin/AdminUsers';

import { checkAuthentication } from './store/authStore';

import CheckAuth from './components/CheckAuth';

import Login from './pages/Auth/Login';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {


  const {isAuthenticated , isLoading} = useSelector( (state) => state.auth)

  // const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(checkAuthentication());
  // }, [dispatch]);


  if (isLoading) return console.log("loading")


  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
    AOS.refresh();
  }, []);






  return (
    <Router>
      <Routes>

        <Route path="/" element={<PagesLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="updates" element={<Updates />} />
          <Route path="contact" element={<Contact />} />
        </Route>


        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} >
            <AdminLayout />
          </CheckAuth>}>
          <Route path="" element={<NewspaperRegister />} />
          <Route path="adminusers" element={<AdminUsers />} />
          <Route path="newspapers" element={<AdminNewspapers />} />
          <Route path="logout" element={"hello"} />
        </Route>


        <Route path="/login" element={<CheckAuth isAuthenticated={isAuthenticated} >
            <Login />
          </CheckAuth>} />
      </Routes>
    </Router>
  );
};

export default App;
