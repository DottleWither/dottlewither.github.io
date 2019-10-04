function include_modules() {
    document.write('\
        <!--The following script tag downloads a font from the Adobe Edge Web Fonts server for use within the web page. We recommend that you do not modify it.--><script>var __adobewebfontsappname__="dreamweaver"</script><script src="http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js" type="text/javascript" async></script>\
        \
        <link href="article-style.css" rel="stylesheet" type="text/css">\
        <link rel="shortcut icon" href="../images/favicon.ico">\
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">\
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/atom-one-light.css">\
        <script src="../js/mathjax.js" async></script>\
        <script src="../js/copy-code.js" async></script>\
        <script src="https://highlightjs.org/static/highlight.site.pack.js"></script>\
        <script>hljs.initHighlightingOnLoad();</script>\
        <script src="../js/hitokoto.js" async></script>\
        <script src="../js/scroll-line.js" async></script>\
        <script src="../js/utterances.js" async></script>\
        <script src="../js/window-onload.js" async></script>\
        <script src="../js/headroom.js" async></script>\
        <textarea id="copy-buffer" style="opacity: 0;width: 0px;height: 0px;"></textarea>\
    ');
}

include_modules();