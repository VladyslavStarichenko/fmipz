// Modules
import { memo, useCallback, useState } from 'react';
import Editor from '@monaco-editor/react';
import PropTypes from 'prop-types';

export function CodeEditorWindowView(props) {
  const { code, language, onChange, theme } = props;

  const [value, setValue] = useState(code || '');

  const onChangeHandler = useCallback((value) => {
    setValue(value);
    onChange('code', value);
  }, [onChange]);

  return (
    <Editor
      defaultValue="// some comment"
      height="70vh"
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
  language: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string,
};

export default memo(CodeEditorWindowView);
