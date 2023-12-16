// Modules
import { memo, useCallback, useState } from 'react';
import Editor from '@monaco-editor/react';
import PropTypes from 'prop-types';

export function CodeEditorWindowView(props) {
  const { code, height, language, onChange, theme } = props;

  const [value, setValue] = useState(code || '');

  const onChangeHandler = useCallback((value) => {
    setValue(value);
    onChange('code', value);
  }, [onChange]);

  return (
    <Editor
      defaultValue="// some comment"
      height={height}
      language={language || "javascript"}
      onChange={onChangeHandler}
      theme={theme}
      value={value}
      width="100%"
    />
  );
}

CodeEditorWindowView.propTypes = {
  code: PropTypes.string.isRequired,
  height: PropTypes.string,
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

CodeEditorWindowView.defaultProps = {
  height: '70vh',
};

export default memo(CodeEditorWindowView);
