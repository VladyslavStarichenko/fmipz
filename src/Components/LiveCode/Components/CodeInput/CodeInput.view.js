// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Styles
import s from './CodeInput.module.scss';

export function CodeInputView(props) {
  const { codeInput, setCodeInput } = props;

  return (
    <textarea
      className={s['container']}
      onChange={(e) => setCodeInput(e.target.value)}
      placeholder="Вхідні дані"
      rows="5"
      value={codeInput}
    />
  );
}

CodeInputView.propTypes = {
  codeInput: PropTypes.string.isRequired,
  setCodeInput: PropTypes.func.isRequired,
};

export default memo(CodeInputView);
