import { FC } from 'react';
import Widget from './Widget.module.scss';

import { Header } from '@components';

const WidgetLayout: FC = ({ children }) => (
  <div className={Widget.wrapper}>
    <Header />
    <div className={Widget.content}>{children}</div>
  </div>
);

export default WidgetLayout;
