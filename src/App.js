import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/nav/Menu';
import PrivateRoute from './components/routes/PrivateRoute';
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
          <Route path='' element={<Dashboard />} />
          <Route path='secret' element={<Secret />} />
        </Route>
        <Route path='*' element={<PageNotFound />} replace />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
