export type Tokens =
  | 'background'
  | 'backgroundDarker'
  | 'foreground'
  | 'foregroundLighter'
  | 'foregroundHover'
  | 'borderColor'
  | 'linkColor'
  | 'fontSize';

export const tokens = new Proxy<Record<Tokens, string>>({} as any, {
  get: function (_, prop) {
    return `var(--${prop as string})`;
  }
});

export type Theme = Record<Tokens, string>;

export const lightTheme: Theme = {
  background: '#fff',
  backgroundDarker: '#F0F8FF',
  foreground: '#000',
  foregroundLighter: '#3d405b',
  foregroundHover: 'violet',
  linkColor: 'blue',
  borderColor: '#000',
  fontSize: '16px'
};
export const darkTheme: Theme = {
  background: '#1f1f1f',
  backgroundDarker: '#181818',
  foreground: '#9ddcfd',
  linkColor: '#569cd6',
  foregroundLighter: '#9ddcfd',
  foregroundHover: '#4ec9b0',
  borderColor: '#fff',
  fontSize: '16px'
};
