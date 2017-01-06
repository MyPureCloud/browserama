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
let isBlink = false;
let isIE = false;

if (!isNotBrowser) {
  isFirefox = typeof InstallTrigger !== 'undefined';
  isChromeOrChromium = !!window.chrome;
  isChrome = !!window.chrome && !!window.chrome.webstore;
  isChromium = isChromeOrChromium && !window.chrome.webstore;
  isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (window.safari && window.safari.pushNotification);
  isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera;
  isEdge = !!window.StyleMedia;
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

  get isEdge () {
    return isEdge;
  },

  get isIE () {
    return isIE;
  },

  get isBlink () {
    return isBlink;
  }
};
