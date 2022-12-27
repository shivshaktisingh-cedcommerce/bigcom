export const loadAsyncJs = (jsLink: string) =>
  new Promise((resolve, reject) => {
    const jsElm = document.createElement('script');
    jsElm.type = 'application/javascript';
    jsElm.src = jsLink;
    document.body.appendChild(jsElm);
    jsElm.onload = () => {
      resolve(jsLink);
    };
    jsElm.onerror = reject;
  });

export const loadAsyncCSS = (href: string) =>
  new Promise((resolve, reject) => {
    const styleCSS = document.createElement('link');
    styleCSS.rel = 'stylesheet';
    styleCSS.href = href;
    document.head.insertBefore(
      styleCSS,
      document.head.childNodes[document.head.childNodes.length - 1].nextSibling
    );

    styleCSS.onload = resolve;
    styleCSS.onerror = reject;
  });
