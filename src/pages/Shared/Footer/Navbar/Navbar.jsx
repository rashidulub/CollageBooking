// import React, { useContext } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
// import logo from '../../../assets/Home/logo1.jpg'
// import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
//   const { user, LogOut } = useContext(AuthContext)
const {user,logOut }= useContext(AuthContext)



  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))

  }
  return (
    <div>
      <div className="navbar    bg-opacity-50 text-white max-w-screen-xl bg-neutral ">  
        <div className="navbar-start">
          <div className="dropdown fixed z-10 opacity-100 rounded-full bg-black">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li ><Link to='/collages'>Collages</Link></li>
              <li > <Link className="mr-5" to='/admission'>Admission</Link></li>
              
              <li><Link className="mr-5" to='/mycollage'>My collage</Link></li>
              
              
           
              {
            user ? <>
              
              <button type="submit" onClick={handleLogout} className="btn mr-5 ">Logout</button>    </> :
              <>
                <Link className="mr-5" to='/login'><button type="submit" className="btn ">Login</button></Link>
              </>
          }
             
          


            </ul>
          </div>
          <img className="w-12  rounded-full mr-0" src='' alt="" />
          <a className="btn btn-ghost normal-case lg:text-3xl">Arsenal</a>
         
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">
            <Link className="mr-5" to='/'>Home</Link>
            <Link className="mr-5" to='/collages'>Collages</Link>
            <Link className="mr-5" to='/admission'>Admission</Link>
            <Link className="mr-5" to='/mycollage'>My Collage</Link>
           




            

          </ul>
        </div>
        <div className="navbar-end">

          
        
        
        
          {
            user ? <>
              
              <button type="submit" onClick={handleLogout} className="btn mr-5 ">Logout</button>    </> :
              <>
                <Link className="mr-5" to='/login'><button type="submit" className="btn ">Login</button></Link>
              </>
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;