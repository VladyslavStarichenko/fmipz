// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Components/Header';

// Renders
import SideBarRender from './SideBar.render';

// Styles
import s from './SideBar.module.scss';

export function SideBarView(props) {
  const { options } = props;

  return (
    <div className={s['container']}>
      <Header />
      <SideBarRender options={options} />
    </div>
  );
}

const optionPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}).isRequired;

SideBarView.propTypes = {
  options: PropTypes.arrayOf(
    optionPropType,
  ).isRequired,
};

export default memo(SideBarView);
