// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import OutputWindowEmpty from './OutputWindow.empty';
import Title from 'Components/LiveCode/Components/Title';

// Renders
import OutputWindowRender from './OutputWindow.render';

// Styles
import s from './OutputWindow.module.scss';

export function OutputWindowView(props) {
  const { outputDetails } = props;

  return (
    <div className={s['container']}>
      <Title>Результат</Title>
      {Boolean(outputDetails) ? (
        <OutputWindowRender
          outputDetails={outputDetails}
        />
      ) : (
        <OutputWindowEmpty />
      )}
    </div>
  );
}

OutputWindowView.propTypes = {
  outputDetails: PropTypes.object,
};

OutputWindowView.defaultProps = {
  outputDetails: null,
};

export default memo(OutputWindowView);
