"undefined"==typeof window||window.ICON_FONT_STYLE?"undefined"!=typeof window&&window.ICON_FONT_STYLE&&window.ICON_FONT_STYLE.update&&window.ICON_FONT_STYLE.update({fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'}):window.ICON_FONT_STYLE={fontName:"vusion-icon-font",styleContent:'@font-face {\n\tfont-family: "vusion-icon-font";\n\tsrc:url("/cloud-ui/theme-default/vusion-icon-font.ttf?2153402fe5add2d3bdd3c42ecdda83b2") format("truetype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.eot?2153402fe5add2d3bdd3c42ecdda83b2#iefix") format("embedded-opentype"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.woff?2153402fe5add2d3bdd3c42ecdda83b2") format("woff"),\n\turl("/cloud-ui/theme-default/vusion-icon-font.svg?2153402fe5add2d3bdd3c42ecdda83b2#vusion-icon-font") format("svg");\n}'},webpackJsonp([9],{514:function(t,e,d){var n="ICON-FONT-FILE-STYLE";function a(t){return(t||window.ICON_FONT_STYLE).styleContent||""}function o(t){var e=document.createElement("style"),d=document.getElementsByTagName("head")[0];e.innerHTML=a(t),e.id=n,e.type="text/css",d?d.appendChild(e):window.addEventListener("load",function(){d.appendChild(e)})}t.exports=function(){window.HAS_CREATE_FONT_STYLE||(o(),window.HAS_CREATE_FONT_STYLE=!0)}},551:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("u-article",[d("h1",[t._v("开关 Switch")]),d("h2",[t._v("示例")]),d("h3",[t._v("基本形式")]),d("div",{staticClass:"u-example"},[d("u-switch")],1),d("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[d("code",{attrs:{"v-pre":""}},[d("span",{attrs:{class:"hljs-tag"}},[t._v("<"),d("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),d("span",{attrs:{class:"hljs-tag"}},[t._v("</"),d("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),d("h3",[t._v("With Text")]),d("div",{staticClass:"u-example"},[d("u-switch",{attrs:{"with-text":""}})],1),d("pre",{pre:!0,attrs:{class:"hljs lang-html"}},[d("code",{attrs:{"v-pre":""}},[d("span",{attrs:{class:"hljs-tag"}},[t._v("<"),d("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(" "),d("span",{attrs:{class:"hljs-attr"}},[t._v("with-text")]),t._v(">")]),d("span",{attrs:{class:"hljs-tag"}},[t._v("</"),d("span",{attrs:{class:"hljs-name"}},[t._v("u-switch")]),t._v(">")]),t._v("\n")])]),d("h2",[t._v("API")]),d("h3",[t._v("Props/Attrs")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Prop/Attr")]),d("th",[t._v("Type")]),d("th",[t._v("Default")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("value")]),d("td",[t._v("Boolean")]),d("td",[d("code",{pre:!0},[t._v("false")])]),d("td",[t._v("开关状态")])]),d("tr",[d("td",[t._v("readonly")]),d("td",[t._v("Boolean")]),d("td",[d("code",{pre:!0},[t._v("false")])]),d("td",[t._v("是否只读")])]),d("tr",[d("td",[t._v("disabled")]),d("td",[t._v("Boolean")]),d("td",[d("code",{pre:!0},[t._v("false")])]),d("td",[t._v("是否禁用")])])])]),d("h3",[t._v("Slots")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Slot")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("(default)")]),d("td",[t._v("插入文本或HTML")])])])]),d("h3",[t._v("Events")]),d("h4",[t._v("@before-toggle")]),d("p",[t._v("切换开关状态前触发")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Param")]),d("th",[t._v("Type")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("$event.value")]),d("td",[t._v("Boolean")]),d("td",[t._v("开关状态")])]),d("tr",[d("td",[t._v("$event.oldValue")]),d("td",[t._v("Boolean")]),d("td",[t._v("旧的开关状态")])]),d("tr",[d("td",[t._v("$event.preventDefault")]),d("td",[t._v("Function")]),d("td",[t._v("阻止切换流程")])])])]),d("h4",[t._v("@input")]),d("p",[t._v("切换开关状态时触发")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Param")]),d("th",[t._v("Type")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("$event")]),d("td",[t._v("Boolean")]),d("td",[t._v("切换后的开关状态")])])])]),d("h4",[t._v("@toggle")]),d("p",[t._v("切换开关状态时触发")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Param")]),d("th",[t._v("Type")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("$event.value")]),d("td",[t._v("Boolean")]),d("td",[t._v("开关状态")])]),d("tr",[d("td",[t._v("$event.oldValue")]),d("td",[t._v("Boolean")]),d("td",[t._v("旧的开关状态")])])])]),d("h4",[t._v("@change")]),d("p",[t._v("开关状态改变时触发")]),d("table",[d("thead",[d("tr",[d("th",[t._v("Param")]),d("th",[t._v("Type")]),d("th",[t._v("Description")])])]),d("tbody",[d("tr",[d("td",[t._v("$event.value")]),d("td",[t._v("Boolean")]),d("td",[t._v("开关状态")])]),d("tr",[d("td",[t._v("$event.oldValue")]),d("td",[t._v("Boolean")]),d("td",[t._v("旧的开关状态")])])])])])},staticRenderFns:[]},a=d(0)(null,n,!1,null,null,null);e.default=a.exports}});