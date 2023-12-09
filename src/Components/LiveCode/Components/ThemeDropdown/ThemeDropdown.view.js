// Modules
import { memo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Constants
import { customStyles } from 'Components/LiveCode/Constants/customStyles';

export function ThemeDropdownView(props) {
  const { handleThemeChange, options, theme } = props;

  return (
    <Select
      onChange={handleThemeChange}
      options={options}
      placeholder="Select Theme"
      styles={customStyles}
      value={theme}
    />
  );
}

ThemeDropdownView.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  theme: PropTypes.object.isRequired,
};

export default memo(ThemeDropdownView);
