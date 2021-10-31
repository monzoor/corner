import { FC } from 'react';
import PlayCardStyle from './PlayCard.module.scss';

const PlayCard: FC<PlayCard> = ({ item }) => {
  return (
    <div className={PlayCardStyle.wrapper}>
      {Object.keys(item).length ? (
        <>
          <p className={PlayCardStyle.title}>CURRENTLY PLAYING</p>
          <p className={PlayCardStyle.info}>{(item as Item).name}</p>
        </>
      ) : (
        <p>Not playing to anything</p>
      )}
    </div>
  );
};

export default PlayCard;
