// dropdown.jsx
import React from 'react';
import './dropdown.css';

const Dropdown = ({ postId, toggleDropdown }) => {
  const Menu = ['Delete', 'Setting'];

  return (
    <div className='menu'>
      <ul>
        {Menu.map((menu) => (
          <li key={menu} onClick={() => handleMenuClick(postId, menu, toggleDropdown)}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  );
};

const handleMenuClick = (postId, menu, toggleDropdown) => {
  console.log(`Post ${postId} - Menu Clicked: ${menu}`);
  toggleDropdown(postId);
};

export default Dropdown;
