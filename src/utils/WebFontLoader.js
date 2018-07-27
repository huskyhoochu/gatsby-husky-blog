import { webFontConfig } from '../data/SiteConfig';

const WebFont = require('webfontloader');

try {
  WebFont.load(webFontConfig);
} catch (e) {
  console.error(e);
}
