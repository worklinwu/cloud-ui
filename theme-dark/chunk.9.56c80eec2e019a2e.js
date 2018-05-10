"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-dark/vusion-icon-font.ttf?4f542c2384c8de7cddf7b5a8c0341d77") format("truetype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.eot?4f542c2384c8de7cddf7b5a8c0341d77#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.woff?4f542c2384c8de7cddf7b5a8c0341d77") format("woff"),\n\turl("/cloud-ui/theme-dark/vusion-icon-font.svg?4f542c2384c8de7cddf7b5a8c0341d77#vusion-icon-font") format("svg");\n}'},webpackJsonp([9],{522:function(t,e,n){var o="ICON-FONT-FILE-STYLE";function d(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function a(t){var e=document.createElement("style"),n=document.getElementsByTagName("head")[0];e.innerHTML=d(t),e.id=o,e.type="text/css",n?n.appendChild(e):window.addEventListener("load",function(){n.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(a(),window.HAS_CREATE_FONT_STYLE=!0)}},560:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("u-article",[n("h1",[t._v("开关 Switch")]),n("h2",[t._v("示例")]),n("h3",[t._v("基本形式")]),n("div",{staticClass:"u-example"},[n("u-switch")],1),n("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),n("h3",[t._v("With Text")]),n("div",{staticClass:"u-example"},[n("u-switch",{attrs:{"with-text":""}})],1),n("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[n("code",{attrs:{"v-pre":""}},[n("span",{attrs:{class:"hljs-tag"}},[t._v("<"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),n("span",{attrs:{class:"hljs-attr"}},[t._v("with-text")]),t._v(">")]),n("span",{attrs:{class:"hljs-tag"}},[t._v("</"),n("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),n("h2",[t._v("API")]),n("h3",[t._v("Props/Attrs")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Prop/Attr")]),n("th",[t._v("Type")]),n("th",[t._v("Default")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("value")]),n("td",[t._v("Boolean")]),n("td",[n("code",{pre:!0},[t._v("false")])]),n("td",[t._v("开关状态")])]),n("tr",[n("td",[t._v("readonly")]),n("td",[t._v("Boolean")]),n("td",[n("code",{pre:!0},[t._v("false")])]),n("td",[t._v("是否只读")])]),n("tr",[n("td",[t._v("disabled")]),n("td",[t._v("Boolean")]),n("td",[n("code",{pre:!0},[t._v("false")])]),n("td",[t._v("是否禁用")])])])]),n("h3",[t._v("Slots")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Slot")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("(default)")]),n("td",[t._v("插入文本或HTML")])])])]),n("h3",[t._v("Events")]),n("h4",[t._v("@before-toggle")]),n("p",[t._v("切换开关状态前触发")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Param")]),n("th",[t._v("Type")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("$event.value")]),n("td",[t._v("Boolean")]),n("td",[t._v("开关状态")])]),n("tr",[n("td",[t._v("$event.oldValue")]),n("td",[t._v("Boolean")]),n("td",[t._v("旧的开关状态")])]),n("tr",[n("td",[t._v("$event.preventDefault")]),n("td",[t._v("Function")]),n("td",[t._v("阻止切换流程")])])])]),n("h4",[t._v("@input")]),n("p",[t._v("切换开关状态时触发")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Param")]),n("th",[t._v("Type")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("$event")]),n("td",[t._v("Boolean")]),n("td",[t._v("切换后的开关状态")])])])]),n("h4",[t._v("@toggle")]),n("p",[t._v("切换开关状态时触发")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Param")]),n("th",[t._v("Type")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("$event.value")]),n("td",[t._v("Boolean")]),n("td",[t._v("开关状态")])]),n("tr",[n("td",[t._v("$event.oldValue")]),n("td",[t._v("Boolean")]),n("td",[t._v("旧的开关状态")])])])]),n("h4",[t._v("@change")]),n("p",[t._v("开关状态改变时触发")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Param")]),n("th",[t._v("Type")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("$event.value")]),n("td",[t._v("Boolean")]),n("td",[t._v("开关状态")])]),n("tr",[n("td",[t._v("$event.oldValue")]),n("td",[t._v("Boolean")]),n("td",[t._v("旧的开关状态")])])])])])},staticRenderFns:[]},d=n(0)(null,o,!1,null,null,null);e.default=d.exports}});