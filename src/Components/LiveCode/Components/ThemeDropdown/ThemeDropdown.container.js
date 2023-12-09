// Modules
import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import monacoThemes from 'monaco-themes/themes/themelist';

// Components
import ThemeDropdownView from './ThemeDropdown.view';

export function ThemeDropdownContainer(props) {
  const { handleThemeChange, theme } = props;

  const options = useMemo(() => {
    return Object.entries(monacoThemes)
      .map(([themeId, themeName]) => ({
        key: themeId,
        label: themeName,
        value: themeId,
      }));
  }, []);

  return (
    <ThemeDropdownView
      handleThemeChange={handleThemeChange}
      options={options}
      theme={theme}
    />
  );
}

ThemeDropdownContainer.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  theme: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

export default memo(ThemeDropdownContainer);
