// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './Title.module.scss';

export function TitleView(props) {
  const { children } = props;

  if (!children) return null;

  return (
    <h3 className={s['container']}>
      {children}
    </h3>
  );
}

TitleView.propTypes = {
  children: PropTypes.string,
};

export default memo(TitleView);
