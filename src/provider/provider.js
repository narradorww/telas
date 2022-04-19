import React, {useState} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export interface IPalletItem {
  color: string;
  font: string;
}

export interface IPallet {
  light: IPalletItem;
  main: IPalletItem;
  dark: IPalletItem;
  textColor: string;
}

export interface IFontFamily {
  regular: string;
  medium: string;
  thin: string;
  light: string;
  bold: string;
  semiBold: string;
}

export interface ITypography {
  title: StyleProp<TextStyle>;
  subtitle: StyleProp<TextStyle>;
  medium: StyleProp<TextStyle>;
  regular: StyleProp<TextStyle>;
  caption: StyleProp<TextStyle>;
}

export interface ITheme {
  primary: IPallet;
  secondary: IPallet;
  error: IPallet;
  warning: IPallet;
  info: IPallet;
  success: IPallet;
  neutral: IPallet;
  background: string;
  surface: string;
  border: string;
  fontFamily: IFontFamily;
  typography: ITypography;
}

export interface IThemeProviderProps {
  initialTheme?: ITheme;
  children: React.ReactNode;
}

const initial = {
  primary: {
    light: {
      color: '#6fa55f',
      font: 'white',
    },
    main: {
      color: '#408927',
      font: 'white',
    },
    dark: {
      color: '#326a1e',
      font: 'white',
    },
    textColor: '#1C2F46',
  },
  secondary: {
    light: {
      color: '#5D7B9F',
      font: 'white',
    },
    main: {
      color: '#5D7B9F',
      font: 'white',
    },
    dark: {
      color: '#1C2F46',
      font: 'white',
    },
    textColor: '#000',
  },
  error: {
    light: {
      color: '#FFE7E7',
      font: '#fff',
    },
    main: {
      color: '#F35858',
      font: '#fff',
    },
    dark: {
      color: '#d32f2f',
      font: '#fff',
    },
    textColor: '#fff',
  },
  warning: {
    light: {
      color: '#FFF2D9',
      font: '#fff',
    },
    main: {
      color: '#FFC700',
      font: '#fff',
    },
    dark: {
      color: '#f57c00',
      font: '#fff',
    },
    textColor: '#fff',
  },
  info: {
    light: {
      color: '#DAE2FF',
      font: '#fff',
    },
    main: {
      color: '#4B57FF',
      font: '#fff',
    },
    dark: {
      color: '#1976d2',
      font: '#fff',
    },
    textColor: '#fff',
  },
  success: {
    light: {
      color: '#D9F6CD',
      font: '#fff',
    },
    main: {
      color: '#80D662',
      font: '#fff',
    },
    dark: {
      color: '#388e3c',
      font: '#fff',
    },
    textColor: '#fff',
  },
  neutral: {
    light: {
      color: '#fafafa',
      font: '#fff',
    },
    main: {
      color: '#f5f5f5',
      font: '#fff',
    },
    dark: {
      color: '#898A8D',
      font: '#fff',
    },
    textColor: '#8C96AE',
  },
  background: '#FAFAFE',
  surface: 'white',
  border: '#DEE2ED',
  fontFamily: {
    regular: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    thin: 'Montserrat-Medium',
    light: 'Montserrat-Light',
    bold: 'Montserrat-Bold',
    semiBold: 'Montserrat-SemiBold',
  },
};

const initialTheme = {
  ...initial,
  typography: {
    title: {
      fontFamily: initial.fontFamily.bold,
      fontSize: 18,
    },
    subtitle: {
      fontFamily: initial.fontFamily.semiBold,
      fontSize: 12,
    },
    medium: {
      fontFamily: initial.fontFamily.medium,
      fontSize: 12,
    },
    regular: {
      fontFamily: initial.fontFamily.regular,
      fontSize: 14,
    },
    caption: {
      fontFamily: initial.fontFamily.thin,
      fontSize: 12,
    },
  },
};

export const ThemeContext = React.createContext(initialTheme);
function ThemeProvider(props: IThemeProviderProps) {
  const [theme, setTheme] = useState(initialTheme);

  // @ts-ignore
  return <ThemeContext.Provider value={{...theme}}>{props.children}</ThemeContext.Provider>;
}
export default ThemeProvider;