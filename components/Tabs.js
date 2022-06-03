import React, { useState } from 'react';
import NavLink from './NavLink';
{
  /* <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider> */
}

const Tabs = ({ children, navItems, contentClassName }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className="flex mb-2">
        {navItems.map((item, index) => (
          <NavLink
            key={item}
            selected={active === index}
            onClick={() => setActive(index)}
          >
            {item}
          </NavLink>
        ))}
      </nav>
      <div className={contentClassName}>{children[active]}</div>
    </>
  );
};

export default Tabs;
