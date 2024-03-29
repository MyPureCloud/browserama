// Use Feature detection instead of user agents -
// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
const isNotBrowser = (typeof window === 'undefined');

let isFirefox = false;
let isChromeOrChromium = false;
let isChrome = false;
let isChromium = false;
let isSafari = false;
let isOpera = false;
let isEdge = false;
let isEdgeChromium = false;
let isBlink = false;
let isIE = false;

if (!isNotBrowser) {
  isFirefox = typeof InstallTrigger !== 'undefined';
  isChromeOrChromium = !!window.chrome;
  isChrome = !!window.chrome;
  isChromium = isChromeOrChromium && !window.chrome.webstore && !window.chrome.runtime;
  isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (window.safari && window.safari.pushNotification);
  isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera;
  isEdge = !!window.StyleMedia;
  isEdgeChromium = isChromeOrChromium && !!navigator.userAgent.match(/edg/i);
  isBlink = (isChrome || isOpera) && !!window.CSS;
  isIE = !isChromeOrChromium && !isSafari && !isFirefox && !isOpera && !!document.documentMode;
}

export default {
  get isChrome () {
    return isChrome;
  },

  get isChromeOrChromium () {
    return isChromeOrChromium;
  },

  get isChromium () {
    return isChromium;
  },

  get isFirefox () {
    return isFirefox;
  },

  get isSafari () {
    return isSafari;
  },

  get isOpera () {
    return isOpera;
  },

  get isEdge () {
    return isEdge;
  },

  get isEdgeChromium () {
    return isEdgeChromium;
  },

  get isIE () {
    return isIE;
  },

  get isBlink () {
    return isBlink;
  }
};
