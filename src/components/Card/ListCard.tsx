import { getAssetUrl } from '@utils';
import { FC } from 'react';

import ListStyle from './ListCard.module.scss';

const ListCard: FC<ListCard> = ({ item: Item, id, expanded, toggleView }) => {
  const isOpen = id === expanded;

  const sliderStyle = isOpen
    ? ListStyle['list__content--show']
    : ListStyle['list__content--hide'];

  const { name, frequency } = Item;
  return (
    <li className={ListStyle.wrapper}>
      <div
        data-testid={`ChannelToPlay${id}`}
        className={ListStyle.list}
        onClick={() => toggleView(isOpen ? -1 : id)}
      >
        <p className={ListStyle['list--title']}>{name}</p>
        <p className={ListStyle['list--sub-title']}>{frequency}</p>
      </div>
      <div className={sliderStyle}>
        <div className={ListStyle['list__content']}>
          <button type="button">
            <img src={getAssetUrl('minus.png')} alt="" />
          </button>
          <img
            className={ListStyle['list__content--player']}
            src={getAssetUrl('play.jpg')}
            alt={isOpen ? 'open' : 'close'}
          />
          <button type="button">
            <img src={getAssetUrl('plus.png')} alt="" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListCard;
