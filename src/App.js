import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import ProtectedRoute from './layouts/protectedRoute';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='login' element={<Login />}/>
      
          <Route element={<ProtectedRoute />} >
              <Route path='/auth/facebook' element={<Home />}/>
          </Route>

    </Routes>
    </div>
  );
}

export default App;
