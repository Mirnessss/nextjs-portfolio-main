import React from "react";
import NavLink from "./NavLink";
import PropTypes from 'prop-types';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center justify-center text-xl rounded-b-xl h-[50dvh] backdrop-filter backdrop-blur-lg">
      {links.map((link) => (
        <li key={link.path}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

MenuOverlay.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default MenuOverlay;
