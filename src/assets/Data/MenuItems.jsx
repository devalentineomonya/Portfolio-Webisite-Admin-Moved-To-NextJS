import { FaTachometerAlt, FaHandshake, FaCertificate, FaTools, FaLanguage, FaProjectDiagram, FaUsers, FaUser } from 'react-icons/fa';

export const menuItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Collaborations",
    href: "/collaborations",
    icon: <FaHandshake />,
  },
  {
    name: "Certificates",
    href: "/certificates",
    icon: <FaCertificate />,
  },
  {
    name: "Tech Stacks",
    href: "/stacks",
    icon: <FaTools />,
  },
  {
    name: "Languages",
    href: "/languages",
    icon: <FaLanguage />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <FaProjectDiagram />,
  },
  {
    name: "Users",
    href: "/users",
    icon: <FaUsers />,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: <FaUser />,
  },
];
