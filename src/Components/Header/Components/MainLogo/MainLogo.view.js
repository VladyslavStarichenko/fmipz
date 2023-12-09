// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './MainLogo.module.scss';

export function MainLogoView(props) {
  const { onClick } = props;

  return (
    <span
      className={s['container']}
      onClick={onClick}
      role="presentation"
    >
      ФМІПЗ
    </span>
  );
}

MainLogoView.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(MainLogoView);
