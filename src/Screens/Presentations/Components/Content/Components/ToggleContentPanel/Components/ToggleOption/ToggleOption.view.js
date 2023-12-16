// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Styles
import s from './ToggleOption.module.scss';

export function ToggleOptionView(props) {
  const { isSelected, onToggle, title } = props;

  const classNames = cx(s['container'], {
    [s['container--selected']]: isSelected,
  });

  return (
    <div
      className={classNames}
      onClick={onToggle}
      role="presentation"
    >
      {title}
    </div>
  );
}

ToggleOptionView.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(ToggleOptionView);
