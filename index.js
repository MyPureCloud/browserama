// Use Feature detection instead of user agents -
// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
const isFirefox = typeof InstallTrigger !== 'undefined';
const isChromeOrChromium = !!window.chrome;
const isChrome = !!window.chrome && !!window.chrome.webstore;
const isChromium = isChromeOrChromium && !window.chrome.webstore;
const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (window.safari && window.safari.pushNotification);
const isOpera = (!!window.opr && !!window.opr.addons) || !!window.opera;
const isEdge = !!window.StyleMedia;
const isBlink = (isChrome || isOpera) && !!window.CSS;
const isIE = !isChromeOrChromium && !isSafari && !isFirefox && !isOpera && !!document.documentMode;

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
