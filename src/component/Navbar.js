import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faRightFromBracket,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Navbar = () => {
  const user = useSelector((state) => state.auth.id);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const [showMenu, setShowMenu] = useState('off');
  const menuOpen = () => {
    showMenu === 'off' ? setShowMenu('on') : setShowMenu('off');
  };
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

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToPath = (path) => {
    setShowMenu('off');
    if (authenticate && path === `/login`) {
      dispatch(authenticateAction.logout());
    }
    navigate(path);
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  useEffect(() => {}, [user]);

  return (
    <div>
      <div className="top-section">
        <FontAwesomeIcon
          className="lnb-menu-bars"
          onClick={menuOpen}
          icon={faBars}
        />
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          {authenticate ? (
            <>
              <div className="mgl15">{user}님 환영합니다!</div>
              <div onClick={() => goToPath(`/login`)}>
                로그아웃 <FontAwesomeIcon icon={faRightFromBracket} />{' '}
              </div>
            </>
          ) : (
            <div onClick={() => goToPath(`/login`)}>로그인</div>
          )}
        </div>
      </div>
      <div className="nav-section" onClick={() => goToPath(`/`)}>
        <img
          width={100}
          alt="logo"
          src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/08e388c3-051a-4455-a141-c9d89bb5780d/5f2898b0-9202-4c65-8c59-915537ee413a/709px-H&M-Logo.svg.png"
        />
      </div>
      <div className="menu">
        <div className={`menu-area ${showMenu}`}>
          <ul className="menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
        <div className="search_box">
          <FontAwesomeIcon className="search_icon" icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyUp={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
