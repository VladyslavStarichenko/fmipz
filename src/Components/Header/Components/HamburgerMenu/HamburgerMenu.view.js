// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import s from './HamburgerMenu.module.scss';

export function HamburgerMenuView(props) {
  const { isMenuOpen, onToggleMenuOpen } = props;

  return (
    <div
      className={s['container']}
      onClick={onToggleMenuOpen}
      role="presentation"
    >
      <div className={s['container__button']} />
      {isMenuOpen && (
        <div className={s['container__options']}>
          <Link to="/">
            Головна
          </Link>
          <Link to="/presentation/0">
            Презентації
          </Link>
          <Link to="/live-code">
            Редактор коду
          </Link>
        </div>
      )}
    </div>
  );
}

HamburgerMenuView.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  onToggleMenuOpen: PropTypes.func.isRequired,
};

export default memo(HamburgerMenuView);
