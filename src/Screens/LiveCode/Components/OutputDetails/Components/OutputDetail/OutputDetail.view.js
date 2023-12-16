// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './OutputDetail.module.scss';

export function OutputDetailView(props) {
  const { title, value } = props;

  return (
    <div className={s['container']}>
      <span className={s['container__title']}>
        {title}:
      </span>
      <span className={s['container__value']}>
        {value}
      </span>
    </div>
  );
}

OutputDetailView.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};

export default memo(OutputDetailView);
