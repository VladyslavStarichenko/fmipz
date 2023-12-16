// Modules
import { useMemo } from 'react';
import PropTypes from 'prop-types';

// Components
import OutputDetailsView from './OutputDetails.view';

export function OutputDetailsContainer(props) {
  const { outputDetails } = props;

  const formattedOutputDetails = useMemo(() => {
    if (!outputDetails) return [];

    return [
      {
        title: 'Статус',
        value: outputDetails.status?.description,
      },
      {
        title: "Пам'ять",
        value: outputDetails.memory,
      },
      {
        title: 'Час',
        value: outputDetails.time,
      },
    ];
  }, [outputDetails]);

  if (!outputDetails) return null;
  console.log(formattedOutputDetails);
  return (
    <OutputDetailsView
      formattedOutputDetails={formattedOutputDetails}
    />
  );
}

OutputDetailsContainer.propTypes = {
  outputDetails: PropTypes.object,
};

OutputDetailsContainer.defaultProps = {
  outputDetails: null,
};

export default OutputDetailsContainer;
