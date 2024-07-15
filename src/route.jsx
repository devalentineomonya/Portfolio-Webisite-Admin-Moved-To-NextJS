// src/router.jsx
import React from 'react';
import {Routes, Route } from 'react-router-dom';
// import Collaborations from './components/Collaborations';
// import Certificates from './components/Certificates';
// import TechStacks from './components/TechStacks';
// import Languages from './components/Languages';
// import Projects from './components/Projects';
// import Users from './components/Users';
// import Profile from './components/Profile';
import Dashboard from "./pages/Dashboard/Dashboard"
import { menuItems } from './assets/Data/MenuItems';

const RouterConfig = () => {
  return (
      <Routes>
        {menuItems.map(({ name, href }) => {
          const Component = getComponentByName(name);
          return <Route key={name} path={href} element={<Component />} />;
        })}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
  );
};

const getComponentByName = (name) => {
  switch (name) {
    case 'Dashboard':
      return Dashboard;
    case 'Collaborations':
      return Collaborations;
    case 'Certificates':
      return Certificates;
    case 'Tech Stacks':
      return TechStacks;
    case 'Languages':
      return Languages;
    case 'Projects':
      return Projects;
    case 'Users':
      return Users;
    case 'Profile':
      return Profile;
    default:
      return () => <div>Component Not Found</div>;
  }
};

export default RouterConfig;
