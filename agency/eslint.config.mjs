import { FlatCompat } from '@eslint/eslintrc';
const compat = new FlatCompat({baseDirectory:import.meta.dirname});
// Native anchors deliberately keep this exported marketing site independent of client routing.
const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { rules: { '@next/next/no-html-link-for-pages': 'off' } },
  { ignores: ['out/**', '.next/**', '.next-production/**', '.npm-cache/**', 'next-env.d.ts'] },
];
export default config;
