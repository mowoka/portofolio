import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
  return (
    <>
      <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
          <nav className="flex ml-10">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inflex-flex intems-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            >
              Giofanny Mowoka
            </NavLink>
            <NavLink
              to="/post"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              Blog Posts
            </NavLink>
            <NavLink
              to="/project"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-red-100 bg-red-700"
              className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            >
              About Me!
            </NavLink>
          </nav>
          <div className="inline-flex py-3 px-3 my-6 mr-10">
            <SocialIcon
              url="https://web.facebook.com/gio.fanny.18/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, weight: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/giofanny-mowoka/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, weight: 35 }}
            />
            <SocialIcon
              url="https://github.com/mowoka"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, weight: 35 }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
