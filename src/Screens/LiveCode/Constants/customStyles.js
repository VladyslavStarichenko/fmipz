export const customStyles = Object.freeze({
  control: (styles) => ({
    ...styles,
    backgroundColor: '#ffffff',
    border: '2px solid #E0E6EC',
    borderRadius: '5px',
    boxShadow: 'unset',
    color: '#000000',
    cursor: 'pointer',
    fontFamily: 'e-Ukraine',
    fontSize: '0.8rem',
    lineHeight: '1.75rem',
    minWidth: '12rem',
    width: '100%',

    ':hover': {
      border: '2px solid #E0E6EC',
      boxShadow: 'none',
    },

    '@media screen and (max-width: 1055px)': {
      maxWidth: 'unset',
      width: '100%',
    },

    '@media screen and (max-width: 472px)': {
      maxWidth: 'unset',
      width: '100%',
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      background: '#ffffff',
      color: '#000000',
      fontFamily: 'e-Ukraine',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
      width: '100%',

      ':hover': {
        backgroundColor: 'rgb(243 244 246)',
        color: '#000000',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: '#ffffff',
      border: '2px solid #E0E6EC',
      borderRadius: '5px',
      boxShadow: 'unset',
      maxWidth: '14rem',
    };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#000000',
      fontFamily: 'e-Ukraine',
      fontSize: '0.8rem',
      lineHeight: '1.75rem',
    };
  },
});
