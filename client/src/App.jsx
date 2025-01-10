import './App.css';
import './index.css';
import React, { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuthentication } from './store/authStore';
import CheckAuth from './components/CheckAuth';
import PagesLayout from './components/PagesLayout';
import AdminLayout from './components/AdminLayout';

// Lazy load route components
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Updates = lazy(() => import('./pages/Updates/Updates'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const NewspaperPage = lazy(() => import('./pages/Newspapers/NewspaperPage'));
const LinkGenerate = lazy(() => import('./pages/Newspapers/LinkGenerate'));
const DownloadPage = lazy(() => import('./pages/Newspapers/DownloadPage'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const NewspaperRegister = lazy(() => import('./pages/Admin/NewspaperRegister'));
const AdminNewspapers = lazy(() => import('./pages/Admin/Newspapers'));
const AddadminUsers = lazy(() => import('./pages/Admin/AddadminUsers'));
const AdminUsers = lazy(() => import('./pages/Admin/AdminUsers'));
const DailyLink = lazy(() => import('./pages/Admin/DailyLink'));

const Login = lazy(() => import('./pages/Auth/Login'));

const App = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Authenticate user
  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 100 });
    AOS.refresh();
  }, []);

  // Show a loading indicator while the authentication state is being determined
  if (isLoading) {
    return <div>Loading...</div>; // Replace with a proper loading spinner if needed
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="news">
              <Route index element={<NewspaperPage />} />
              <Route path=":id" element={<NewspaperPage />} />
            </Route>
            <Route path="download">
              <Route index element={<LinkGenerate />} />
              <Route path=":id" element={<LinkGenerate />} />
            </Route>
            <Route path="updates" element={<Updates />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/adminusers" replace />} />
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route index element={<Navigate to="add-newspaper" replace />} />
            <Route path="adminusers" element={<AdminUsers />} />
            <Route path="add-adminusers" element={<AddadminUsers />} />
            <Route path="add-newspaper" element={<NewspaperRegister />} />
            <Route path="newspapers" element={<AdminNewspapers />} />
            <Route path="today-newspaper" element={<DailyLink />} />
          </Route>

          {/* Authentication Route */}
          <Route
            path="/login"
            element={
              <CheckAuth isAuthenticated={isAuthenticated}>
                <Login />
              </CheckAuth>
            }
          />

          {/* Download Route */}
          <Route path="/downloadpage">
            <Route index element={<DownloadPage />} />
            <Route path=":id" element={<DownloadPage />} />
          </Route>

          {/* Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
