import React from 'react';
import withStyle from './withStyle';
import Link from '../../atoms/Link/Link';

const MenuContent = ({ className, data }) => (
  <div className={`${className}`}>
    {
      data.map(({ title, icon, list }) => (
        <div className="menu-content__item">
          <span className="menu-content__box_title">
            <img src={icon} alt="menu icon" />
            <h1 className="menu-content__title">{title}</h1>
          </span>
          <ul className="menu-content__list">
            { list.map(({ link, title: subTitle }) => (
              <li>
                <Link to={link}> {subTitle} </Link>
              </li>
            )) }
          </ul>

        </div>
      ))
    }
  </div>
);

export default withStyle(MenuContent);
