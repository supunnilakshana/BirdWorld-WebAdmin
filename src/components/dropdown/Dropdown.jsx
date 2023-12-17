import React from 'react';
import './dropdown.css';

const Dropdown = () => {
  const Menu = ['Delete', 'Setting'];

  return (
    <div className='menu'>
      <ul>
        {Menu.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
