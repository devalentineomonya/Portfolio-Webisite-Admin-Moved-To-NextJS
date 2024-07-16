// src/router.jsx
import React from 'react';
import {Routes, Route } from 'react-router-dom';

import Dashboard from "./pages/Dashboard/Dashboard"
import { menuItems } from './assets/Data/MenuItems';
import Collaborations from './pages/Collaborations/Collaborations';
import Certificates from './pages/Certificates/Certificates';
import Stacks from './pages/Stacks/Stacks';
import Projects from './pages/Projects/Projects';
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';
import Languages from './pages/Languages/Languages';
import AddUserForm from './components/UsersForms/AddUserForm';

const RouterConfig = () => {
  return (
      <Routes>
        {menuItems.map(({ label, link }) => {
          const Component = getComponentByLabel(label);
          return <Route key={label} path={link} element={<Component />} />;
        })}
        <Route path="/users/add" element={<AddUserForm/>}/>
        <Route path="/users/edit/:userId" element={<AddUserForm/>}/>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
  );
};

const getComponentByLabel = (label) => {
  switch (label) {
    case 'Dashboard':
      return Dashboard;
    case 'Collaborations':
      return Collaborations;
    case 'Certificates':
      return Certificates;
    case 'Tech Stacks':
      return Stacks;
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
