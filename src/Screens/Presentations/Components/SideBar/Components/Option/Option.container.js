// Modules
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import OptionView from './Option.view';

// Constants
import PRESENTATIONS from 'Constants/presentations';

// Hooks
import usePresentation from 'Hooks/usePresentation';

export function OptionContainer(props) {
  const { idx, title, type } = props;

  const navigate = useNavigate();

  const { presentationId } = useParams();

  const { setSelectedPresentation } = usePresentation();

  const onClickHandler = useCallback(() => {
    navigate(`/presentation/${idx}`);
    setSelectedPresentation(PRESENTATIONS[idx]);
  }, [idx, navigate, setSelectedPresentation]);

  const presentationIdNumber = +presentationId;

  const isSelected = idx === presentationIdNumber;

  return (
    <OptionView
      isSelected={isSelected}
      onClick={onClickHandler}
      title={title}
      type={type}
    />
  );
}

OptionContainer.propTypes = {
  idx: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default OptionContainer;
