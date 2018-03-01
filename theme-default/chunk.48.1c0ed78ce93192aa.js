"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?e2b6cccc236e6f4e8780b5e67c8509ff") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?e2b6cccc236e6f4e8780b5e67c8509ff#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?e2b6cccc236e6f4e8780b5e67c8509ff") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?e2b6cccc236e6f4e8780b5e67c8509ff#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?e2b6cccc236e6f4e8780b5e67c8509ff") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?e2b6cccc236e6f4e8780b5e67c8509ff#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?e2b6cccc236e6f4e8780b5e67c8509ff") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?e2b6cccc236e6f4e8780b5e67c8509ff#vusion-icon-font") format("svg");\n}'},webpackJsonp([48],{472:function(e,t,o){var n="ICON-FONT-FILE-STYLE";function c(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function r(e){var t=document.createElement("style"),o=document.getElementsByTagName("head")[0];t.innerHTML=c(e),t.id=n,t.type="text/css",o?o.appendChild(t):window.addEventListener("load",function(){o.appendChild(t)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},535:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("u-article",[o("h1",[e._v("路由项 RouterItem")]),o("h2",[e._v("API")]),o("h3",[e._v("Props/Attrs")]),o("table",[o("thead",[o("tr",[o("th",[e._v("Prop/Attr")]),o("th",[e._v("Type")]),o("th",[e._v("Default")]),o("th",[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[e._v("href")]),o("td",[e._v("String")]),o("td"),o("td",[e._v("链接地址")])]),o("tr",[o("td",[e._v("target")]),o("td",[e._v("String")]),o("td"),o("td",[e._v("打开方式")])]),o("tr",[o("td",[e._v("to")]),o("td",[e._v("String, Location")]),o("td"),o("td",[e._v("需要vue-router，与"),o("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),o("code",{pre:!0},[e._v("to")]),e._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),o("tr",[o("td",[e._v("replace")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("false")])]),o("td",[e._v("需要vue-router，与"),o("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),o("code",{pre:!0},[e._v("replace")]),e._v("属性相同。如果为"),o("code",{pre:!0},[e._v("true")]),e._v("，当点击时，会调用"),o("code",{pre:!0},[e._v("router.replace()")]),e._v("而不是"),o("code",{pre:!0},[e._v("router.push()")]),e._v("，于是导航后不会留下"),o("code",{pre:!0},[e._v("history")]),e._v("记录。")])]),o("tr",[o("td",[e._v("exact")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("false")])]),o("td",[e._v("需要vue-router，与"),o("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),o("code",{pre:!0},[e._v("exact")]),e._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),o("h3",[e._v("Events")]),o("h4",[e._v("@before-navigate")]),o("p",[e._v("使用router相关属性切换路由前触发")]),o("table",[o("thead",[o("tr",[o("th",[e._v("Param")]),o("th",[e._v("Type")]),o("th",[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[e._v("$event.to")]),o("td",[e._v("String, Location")]),o("td",[o("code",{pre:!0},[e._v("to")]),e._v("属性的值")])]),o("tr",[o("td",[e._v("$event.replace")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("replace")]),e._v("属性的值")])]),o("tr",[o("td",[e._v("$event.exact")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("exact")]),e._v("属性的值")])]),o("tr",[o("td",[e._v("$event.preventDefault")]),o("td",[e._v("Function")]),o("td",[e._v("阻止切换流程")])])])]),o("h4",[e._v("@navigate")]),o("p",[e._v("使用router相关属性切换路由时触发")]),o("table",[o("thead",[o("tr",[o("th",[e._v("Param")]),o("th",[e._v("Type")]),o("th",[e._v("Description")])])]),o("tbody",[o("tr",[o("td",[e._v("$event.to")]),o("td",[e._v("String, Location")]),o("td",[o("code",{pre:!0},[e._v("to")]),e._v("属性的值")])]),o("tr",[o("td",[e._v("$event.replace")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("replace")]),e._v("属性的值")])]),o("tr",[o("td",[e._v("$event.exact")]),o("td",[e._v("Boolean")]),o("td",[o("code",{pre:!0},[e._v("exact")]),e._v("属性的值")])])])])])},staticRenderFns:[]},c=o(0)(null,n,!1,null,null,null);t.default=c.exports}});