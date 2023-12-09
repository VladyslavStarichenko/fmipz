// Modules
import { loader } from '@monaco-editor/react';

// Constants
import MONACO_THEMES from 'Components/LiveCode/Constants/monacoThemes';

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${MONACO_THEMES[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };
