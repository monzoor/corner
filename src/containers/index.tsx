import { FC, useState } from 'react';

import { WidgetLayout, ListCard, PlayCard } from '@components';
import AppStyle from './App.module.scss';

const data = [
  {
    id: 123,
    name: 'Putin FM',
    frequency: '66,6',
  },
  {
    id: 124,
    name: 'Dribble FM',
    frequency: '101,2',
  },
  {
    id: 125,
    name: 'Doge FM',
    frequency: '99,4',
  },
  {
    id: 126,
    name: 'Ballads FM',
    frequency: '87,1',
  },
  {
    id: 127,
    name: 'Maximum FM',
    frequency: '142,2',
  },
];

const App: FC = () => {
  const [expanded, setExpanded] = useState<number>(-1);

  const toggleView = (id: number) => {
    setExpanded(id);
  };
  return (
    <WidgetLayout>
      <ul className={AppStyle.wrapper}>
        {data.map((item: Item, index: number) => {
          return (
            <ListCard
              item={item}
              expanded={expanded}
              toggleView={toggleView}
              key={item.id}
              id={index}
            />
          );
        })}
      </ul>
      <PlayCard item={data[expanded] || {}} />
    </WidgetLayout>
  );
};

export default App;
