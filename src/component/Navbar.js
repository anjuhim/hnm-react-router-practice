import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sport',
    'Sale',
    '지속가능성',
  ];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          alt="logo"
          src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/08e388c3-051a-4455-a141-c9d89bb5780d/5f2898b0-9202-4c65-8c59-915537ee413a/709px-H&M-Logo.svg.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
