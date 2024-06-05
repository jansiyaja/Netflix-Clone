import { Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';

import Account from './Pages/Home';

import { AuthContextProvider } from './Context/AuthContext';
import SignUp from './Pages/SignUp';
import Index from './Pages/Index';


function App() {
  return (
    
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </AuthContextProvider>
    
  );
}

export default App;
