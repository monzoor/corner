import { FC } from 'react';
import HeaderStyle from './Header.module.scss';

import { getAssetUrl } from '@utils';

const Header: FC = () => {
  return (
    <div className={HeaderStyle.wrapper}>
      <button type="button">
        <img
          width="28px"
          height="48px"
          src={getAssetUrl('back-arrow.png')}
          alt=""
        />
      </button>
      <p>STATIONS</p>
      <button type="button">
        <img
          width="44px"
          height="52px"
          src={getAssetUrl('switch.png')}
          alt=""
        />
      </button>
    </div>
  );
};

export default Header;
