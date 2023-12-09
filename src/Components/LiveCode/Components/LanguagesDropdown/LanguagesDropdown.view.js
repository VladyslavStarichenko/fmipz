// Modules
import { memo } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

// Constants
import { customStyles } from 'Components/LiveCode/Constants/customStyles';
import { LANGUAGE_OPTIONS } from 'Components/LiveCode/Constants/languageOptions';

export function LanguagesDropdownView(props) {
  const { onSelectChange } = props;

  return (
    <Select
      defaultValue={LANGUAGE_OPTIONS[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
      options={LANGUAGE_OPTIONS}
      placeholder="Filter By Category"
      styles={customStyles}
    />
  );
}

LanguagesDropdownView.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};

export default memo(LanguagesDropdownView);
