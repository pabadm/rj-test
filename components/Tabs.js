import React, { useState } from 'react';
import NavLink from './NavLink';
import StateContext from './StateContext';

const Tabs = ({ children, navItems, contentClassName }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className="flex mb-2">
        <StateContext.Consumer>
          {({ setState }) =>
            navItems.map((item, index) => (
              <NavLink
                key={item}
                selected={active === index}
                onClick={() => {
                  setActive(index);
                  setState(index);
                }}
              >
                {item}
              </NavLink>
            ))
          }
        </StateContext.Consumer>
      </nav>
      <div className={contentClassName}>{children[active]}</div>
    </>
  );
};

export default Tabs;
