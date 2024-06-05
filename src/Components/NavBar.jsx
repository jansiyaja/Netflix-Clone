import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const NavBar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between w-full p-4 z-[100] absolute top-0">
      <Link to={'/'}>
        <img className="h-8 md:h-12 px-4 md:px-10 lg:px-20" src="/src/Images/Netflix-logo.png" alt="Netflix" />
      </Link>
      {user?.email ? (
        <div className='flex items-center space-x-2 md:space-x-4 mr-4 md:mr-10'>
          <button className="text-white border-2 border-white py-1 px-2 md:py-2 md:px-4 rounded flex items-center">
            <span>English</span>
          </button>
          <button
            onClick={handleLogout}
            className='bg-red-600 hover:bg-red-800 text-white rounded cursor-pointer px-2 py-1 md:px-4 md:py-2'
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className='flex items-center space-x-2 md:space-x-4 mr-4 md:mr-10'>
          <button className="text-white border-2 border-white py-1 px-2 md:py-2 md:px-4 rounded flex items-center">
            <span>English</span>
          </button>
          <Link to={'/login'}>
            <button className='bg-red-600 hover:bg-red-800 text-white rounded cursor-pointer px-2 py-1 md:px-4 md:py-2'>
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
