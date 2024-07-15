// ../../assets/Data/MenuItems.js

import { FaTachometerAlt, FaHandshake, FaCertificate, FaTools, FaLanguage, FaProjectDiagram, FaUsers, FaUser } from 'react-icons/fa';

export const menuItems = [
  {
    key: '1',
    icon: <FaTachometerAlt />,
    label: 'Dashboard',
    href: '/',
  },
  {
    key: '2',
    icon: <FaHandshake />,
    label: 'Collaborations',
    href: '/collaborations',
  },
  {
    key: '3',
    icon: <FaCertificate />,
    label: 'Certificates',
    href: '/certificates',
  },
  {
    key: '4',
    icon: <FaTools />,
    label: 'Tech Stacks',
    href: '/stacks',
  },
  {
    key: '5',
    icon: <FaLanguage />,
    label: 'Languages',
    href: '/languages',
  },
  {
    key: '6',
    icon: <FaProjectDiagram />,
    label: 'Projects',
    href: '/projects',
  },
  {
    key: '7',
    icon: <FaUsers />,
    label: 'Users',
    href: '/users',
  },
  {
    key: '8',
    icon: <FaUser />,
    label: 'Profile',
    href: '/profile',
  },
];
