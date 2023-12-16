// Modules
import { NavLink } from 'react-router-dom';

// Components
import CodeEditorButton from './Components/CodeEditorButton';
import HamburgerMenu from './Components/HamburgerMenu';
import MainLogo from './Components/MainLogo';

// Constants
import COLORS from 'Constants/colors';

// Styles
import s from './Header.module.scss';

export function HeaderView() {
  return (
    <div className={s['container']}>
      <div className={s['container__navigation']}>
        <MainLogo />
        <div className={s['container__navigation__links']}>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive
                  ? COLORS.black._100
                  : COLORS.gray._3,
              };
            }}
            to="/"
          >
            Головна
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive
                  ? COLORS.black._100
                  : COLORS.gray._3,
              };
            }}
            to="/presentation/0"
          >
            Презентації
          </NavLink>
        </div>
      </div>
      <CodeEditorButton />
      <HamburgerMenu />
    </div>
  );
}

export default HeaderView;
