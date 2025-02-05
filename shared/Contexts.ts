import {createContext} from 'react';
import {UserInfo} from './types';

export const AuthContext = createContext<UserInfo | null>(null);
//export const ThemeContext = createContext('light');
