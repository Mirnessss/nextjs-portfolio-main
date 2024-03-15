import { Link as ScrollLink } from 'react-scroll'; // Import Link as ScrollLink from react-scroll

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href} // Use 'to' instead of 'href'
      spy={true}
      smooth={true}
      duration={500}
      className="block cursor-pointer py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded-full md:p-2 hover:bg-purple-500 hover:text-white duration-300"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
