import { darkColors, lightColors } from './colors'

export const shadows = {
  level1: '0 2px 10px hsl(0 0% 0% / 0.141)',
}

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  fonts: {
    normal: "'Untitled Sans', sans-serif",
    mono: 'Söhne Mono, ui-monospace, monospace',
  },
  space: {
    '0px': '0px',
    '1rem': '1rem',
    '1px': '1px',
    '2px': '2px',
    '6px': '6px',
    '4px': '4px',
    '8px': '8px',
    '12px': '12px',
    '14px': '14px',
    '16px': '16px',
    '20px': '20px',
    '24px': '24px',
    '32px': '32px',
    '48px': '48px',
    '56px': '56px',
    '64px': '64px',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0': '0px',
    '8px': '8px',
    '12px': '12px',
    '20px': '20px',
    '32px': '32px',
    small: '4px',
    default: '16px',
    card: '24px',
    large: '100px',
    circle: '50%',
  },
  fontSizes: {
    '10px': '10px',
    '12px': '12px',
    '16px': '16px',
    '14px': '14px',
    '20px': '20px',
    '40px': '40px',
  },
  shadows,
} as const

export type Mode = 'light' | 'dark'
export type Tokens = typeof tokens
