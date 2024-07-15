// ../../assets/Data/MenuItems.js

import { FaTachometerAlt, FaHandshake, FaCertificate, FaTools, FaLanguage, FaProjectDiagram, FaUsers, FaUser } from 'react-icons/fa';

export const menuItems = [
  {
    key: '1',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    link: '/',
  },
  {
    key: '2',
    icon: <FaHandshake />,
    label: 'Collaborations',
    link: '/collaborations',
  },
  {
    key: '3',
    icon: <FaCertificate />,
    label: 'Certificates',
    link: '/certificates',
  },
  {
    key: '4',
    icon: <FaTools />,
    label: 'Tech Stacks',
    link: '/stacks',
  },
  {
    key: '5',
    icon: <FaLanguage />,
    label: 'Languages',
    link: '/languages',
  },
  {
    key: '6',
    icon: <FaProjectDiagram />,
    label: 'Projects',
    link: '/projects',
  },
  {
    key: '7',
    icon: <FaUsers />,
    label: 'Users',
    link: '/users',
  },
  {
    key: '8',
    icon: <FaUser />,
    label: 'Profile',
    link: '/profile',
  },
];
