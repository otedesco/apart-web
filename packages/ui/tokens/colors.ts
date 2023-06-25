export const baseColors = {}

export const additionalColors = {}

export const lightColors = {
  ...baseColors,
  ...additionalColors,
  background: '#FFF',
  backgroundAlt: '#FAFAFA',
  cardBorder: '#EAEAEA',
  contrast: '#000',
}

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  background: '#000',
  backgroundAlt: '#111',
  cardBorder: '#333',
  contrast: '#FFF',
}
