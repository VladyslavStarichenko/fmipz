// Modules
import { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'Components/Button';
import CodeEditorWindow from 'Screens/LiveCode/Components/CodeEditorWindow';
import OutputDetails from 'Screens/LiveCode/Components/OutputDetails';
import OutputWindow from 'Screens/LiveCode/Components/OutputWindow';

// Styles
import s from './PresentationCode.module.scss';

export function PresentationCodeView(props) {
  const {
    code,
    handleCompile,
    language,
    onChange,
    outputDetails,
    processing,
    theme,
  } = props;

  return (
    <div className={s['container']}>
      <CodeEditorWindow
        code={code}
        height="600px"
        language={language?.value}
        onChange={onChange}
        theme={theme?.value}
      />
      <div className={s['container__control']}>
        <span className={s['container__control__language']}>
          {language?.name}
        </span>
        <Button
          disabled={!code || processing}
          onClick={handleCompile}
        >
          {processing ? 'Обробка...' : 'Скомпілювати та Виконати'}
        </Button>
      </div>
      <OutputWindow
        outputDetails={outputDetails}
      />
      {outputDetails ? (
        <OutputDetails
          outputDetails={outputDetails}
        />
      ) : null}
    </div>
  );
}

PresentationCodeView.propTypes = {
  code: PropTypes.string.isRequired,
  handleCompile: PropTypes.func.isRequired,
  language: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  outputDetails: PropTypes.object,
  processing: PropTypes.bool,
  theme: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

PresentationCodeView.defaultProps = {
  outputDetails: null,
  processing: false,
  theme: null,
};

export default memo(PresentationCodeView);
