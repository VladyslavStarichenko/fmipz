// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './Description.module.scss';

export function DescriptionView(props) {
  const { title, type } = props;

  return (
    <div className={s['container']}>
      <h3 className={s['container__type']}>
        {type}
      </h3>
      <h1 className={s['container__title']}>
        {title}
      </h1>
    </div>
  );
}

DescriptionView.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(DescriptionView);
