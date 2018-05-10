"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-seagreen/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-seagreen/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([51],{520:function(e,t,d){var o="ICON-FONT-FILE-STYLE";function n(e){return(e||window.ICON_FONT_STYLE).styleContent||""}function r(e){var t=document.createElement("style"),d=document.getElementsByTagName("head")[0];t.innerHTML=n(e),t.id=o,t.type="text/css",d?d.appendChild(t):window.addEventListener("load",function(){d.appendChild(t)})}e.exports=function(){window.HAS_CREATE_FONT_STYLE||(r(),window.HAS_CREATE_FONT_STYLE=!0)}},594:function(e,t,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("u-article",[d("h1",[e._v("路由项 RouterItem")]),d("h2",[e._v("API")]),d("h3",[e._v("Props/Attrs")]),d("table",[d("thead",[d("tr",[d("th",[e._v("Prop/Attr")]),d("th",[e._v("Type")]),d("th",[e._v("Default")]),d("th",[e._v("Description")])])]),d("tbody",[d("tr",[d("td",[e._v("href")]),d("td",[e._v("String")]),d("td"),d("td",[e._v("链接地址")])]),d("tr",[d("td",[e._v("target")]),d("td",[e._v("String")]),d("td"),d("td",[e._v("打开方式")])]),d("tr",[d("td",[e._v("to")]),d("td",[e._v("String, Location")]),d("td"),d("td",[e._v("需要vue-router，与"),d("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),d("code",{pre:!0},[e._v("to")]),e._v("属性相同。可以是一个字符串或者是描述目标位置的对象。")])]),d("tr",[d("td",[e._v("replace")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("false")])]),d("td",[e._v("需要vue-router，与"),d("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),d("code",{pre:!0},[e._v("replace")]),e._v("属性相同。如果为"),d("code",{pre:!0},[e._v("true")]),e._v("，当点击时，会调用"),d("code",{pre:!0},[e._v("router.replace()")]),e._v("而不是"),d("code",{pre:!0},[e._v("router.push()")]),e._v("，于是导航后不会留下"),d("code",{pre:!0},[e._v("history")]),e._v("记录。")])]),d("tr",[d("td",[e._v("exact")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("false")])]),d("td",[e._v("需要vue-router，与"),d("code",{pre:!0},[e._v("<router-link>")]),e._v("的"),d("code",{pre:!0},[e._v("exact")]),e._v("属性相同。是否与路由完全一致时才高亮显示。")])])])]),d("h3",[e._v("Events")]),d("h4",[e._v("@before-navigate")]),d("p",[e._v("使用router相关属性切换路由前触发")]),d("table",[d("thead",[d("tr",[d("th",[e._v("Param")]),d("th",[e._v("Type")]),d("th",[e._v("Description")])])]),d("tbody",[d("tr",[d("td",[e._v("$event.to")]),d("td",[e._v("String, Location")]),d("td",[d("code",{pre:!0},[e._v("to")]),e._v("属性的值")])]),d("tr",[d("td",[e._v("$event.replace")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("replace")]),e._v("属性的值")])]),d("tr",[d("td",[e._v("$event.exact")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("exact")]),e._v("属性的值")])]),d("tr",[d("td",[e._v("$event.preventDefault")]),d("td",[e._v("Function")]),d("td",[e._v("阻止切换流程")])])])]),d("h4",[e._v("@navigate")]),d("p",[e._v("使用router相关属性切换路由时触发")]),d("table",[d("thead",[d("tr",[d("th",[e._v("Param")]),d("th",[e._v("Type")]),d("th",[e._v("Description")])])]),d("tbody",[d("tr",[d("td",[e._v("$event.to")]),d("td",[e._v("String, Location")]),d("td",[d("code",{pre:!0},[e._v("to")]),e._v("属性的值")])]),d("tr",[d("td",[e._v("$event.replace")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("replace")]),e._v("属性的值")])]),d("tr",[d("td",[e._v("$event.exact")]),d("td",[e._v("Boolean")]),d("td",[d("code",{pre:!0},[e._v("exact")]),e._v("属性的值")])])])])])},staticRenderFns:[]},n=d(0)(null,o,!1,null,null,null);t.default=n.exports}});