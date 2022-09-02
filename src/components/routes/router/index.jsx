import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import useForm from '../register/hooks/useForm';

const Navigation = () => {
  const { submit, values } = useForm();
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/authentication">
            {!submit ? 'SIGN IN ' : values.displayName}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
