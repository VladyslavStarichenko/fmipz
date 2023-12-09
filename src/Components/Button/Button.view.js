// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './Button.module.scss';

export function ButtonView(props) {
  const { children, disabled, onClick } = props;

  return (
    <button
      className={s['button']}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

ButtonView.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ButtonView);
