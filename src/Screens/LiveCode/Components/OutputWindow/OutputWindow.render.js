// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './OutputWindow.module.scss';

export function OutputWindowRender(props) {
  const { outputDetails } = props;

  const statusId = outputDetails?.status?.id;

  let outputResult;
  switch (statusId) {
    case 3: {
      outputResult = atob(outputDetails.stdout) !== null
        ? `${atob(outputDetails.stdout)}`
        : null;
      break;
    }
    case 5: {
      outputResult = 'Time Limit Exceeded';
      break;
    }
    case 6: {
      outputResult = atob(outputDetails.compile_output);
      break;
    }
    default: {
      outputResult = atob(outputDetails.stderr);
      break;
    }
  }

  return (
    <pre className={s['container__result']}>
      {outputResult}
    </pre>
  );
}

OutputWindowRender.propTypes = {
  outputDetails: PropTypes.object,
};

OutputWindowRender.defaultProps = {
  outputDetails: null,
};

export default memo(OutputWindowRender);
