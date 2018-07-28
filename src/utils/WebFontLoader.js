/* eslint-disable global-require */
import { webFontConfig } from '../data/SiteConfig';

if (typeof window !== 'undefined') {
  const WebFont = require('webfontloader');

  try {
    WebFont.load(webFontConfig);
  } catch (e) {
    console.error(e);
  }
}
