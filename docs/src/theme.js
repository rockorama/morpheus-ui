const colors = {
  white: '#fff',
  lightYellow: '#fcecb0',
  yellow: '#FFD953',
  blue: '#1f3464',
  lightBlue: '#00a7e7',
  red: '#da1157',
  lightGray: '#f7f7f7',
  gray: '#f1f1f1',
  mediumGray: '#B5B5B5',
  darkGray: '#232323',
  transparent: 'rgb(0,0,0)',
}

export default {
  styled: {
    spacing: 20,
    leftNavColor: '#e3e3e3',
    linkColor: '#DA1157',
  },
  Button: {
    yellow: {
      backgroundColor: colors.yellow,
      borderColor: colors.yellow,
      titleColor: colors.black,

      titleHoverColor: colors.white,
    },
  },
  Text: {
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
}
