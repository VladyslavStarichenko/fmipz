// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import s from './Option.module.scss';

export function OptionView(props) {
  const { isSelected, onClick, title, type } = props;

  const className = cx(s['container'], {
    [s['container--selected']]: isSelected,
  });

  return (
    <div
      className={className}
      onClick={onClick}
      role="presentation"
    >
      <span className={s['container__type']}>
        {type}
      </span>
      <span className={s['container__title']}>
        {title}
      </span>
    </div>
  );
}

OptionView.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default memo(OptionView);
