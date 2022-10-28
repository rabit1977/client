import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/nav/Menu';
import AdminRoute from './components/routes/AdminRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Secret from './pages/Secret';
import Dashboard from './pages/user/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='user' element={<Dashboard />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
        </Route>
        <Route path='*' element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
