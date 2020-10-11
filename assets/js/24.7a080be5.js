(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{428:function(t,s,a){"use strict";a.r(s);var e=a(41),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"theming"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theming","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Theming")]),t._v(" "),a("h2",{attrs:{id:"custom-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-properties","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Custom Properties")]),t._v(" "),a("p",[t._v("Theming with HiQ is easy, since the framework is built using custom properties. All custom properties defined globally by HiQ are namespaced with "),a("code",[t._v("--hiq-*")]),t._v(".")]),t._v(" "),a("p",[t._v("All you need to do is set these custom properties to your own values. This can be done in a few ways:")]),t._v(" "),a("h3",{attrs:{id:"global-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-overrides","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Global overrides")]),t._v(" "),a("p",[t._v("Define custom properties on the root element to affect the global scope. These can be defined before or after the import of HiQ itself.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node_modules/hiq/dist/hiq.min.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--hiq-button-background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightgray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"dark-mode-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dark-mode-support","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Dark mode support")]),t._v(" "),a("p",[t._v("You can override global values within a media query to support native dark mode.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("prefers-color-scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--hiq-color-gray-1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("220"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 98%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"scoped-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-overrides","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Scoped overrides")]),t._v(" "),a("p",[t._v("Define custom properties on particular selectors to limit their scope. These locally-scoped custom properties will not have the "),a("code",[t._v("hiq-")]),t._v(" prefix.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button.is-primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"inline-overrides"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-overrides","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Inline overrides")]),t._v(" "),a("p",[t._v("Pass in the custom property values using the "),a("code",[t._v("style")]),t._v(" attribute in your html. You might feel that this has similarities to dreaded inline styling, but you can also think of it as something more like "),a("code",[t._v("props")]),t._v(" in React and similar JavaScript frameworks.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#color","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Color")]),t._v(" "),a("p",[t._v("Every color used throughout HiQ is defined as a custom property. We favor using color keywords and colors defined using the HSL scale. We find that these are more human-readable than hex codes or RGB values.")]),t._v(" "),a("h3",{attrs:{id:"gray-palette"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gray-palette","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Gray Palette")]),t._v(" "),a("p",[t._v("All gray values are built from a single gray palette composed of eight gradations, ranging from "),a("code",[t._v("gray-1")]),t._v(" to "),a("code",[t._v("gray-8")]),t._v(". These are created from HSL values of the same hue and saturation, where only the lightness is modified. By default, the gradations run from darkest to lightest, but you can alter this if, say, you are implementing a dark theme override.")]),t._v(" "),a("PropertiesTable",{attrs:{category:"gray-palette"}}),t._v(" "),a("h3",{attrs:{id:"semantic-palette"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semantic-palette","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Semantic Palette")]),t._v(" "),a("p",[t._v("There are four colors defined in HiQ that convey semantic meaning:")]),t._v(" "),a("PropertiesTable",{attrs:{category:"semantic-palette"}}),t._v(" "),a("h3",{attrs:{id:"adding-additional-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-additional-colors","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Adding Additional Colors")]),t._v(" "),a("p",[t._v("You will likely need additional colors. We recommend creating custom properties on the "),a("code",[t._v(":root")]),t._v(" element every time you find it necessary to create a new value. This will allow you to reuse the color globally.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color-accent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"applied-colors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applied-colors","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Applied Colors")]),t._v(" "),a("p",[t._v("The manner in which colors are applied is also customizable. A set of custom properties defines the colors applied to certain structural and typographic elements. Additional color-related properties will be found in the documentation for each component.")]),t._v(" "),a("PropertiesTable",{attrs:{category:"applied-colors"}}),t._v(" "),a("h2",{attrs:{id:"recommendations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommendations","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Recommendations")]),t._v(" "),a("p",[t._v("HiQ establishes some conventions for class naming, modifier classes, media queries, etc. that you may find helpful to follow when customizing and extending the framework. But please feel free to follow your own conventions.")]),t._v(" "),a("p",[t._v("HiQ is specifically designed to be lightweight and work with any naming convention or organization scheme.")]),t._v(" "),a("h3",{attrs:{id:"modifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifiers","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Modifiers")]),t._v(" "),a("p",[t._v("There are two types of modifier classes. "),a("code",[t._v("is-*")]),t._v(" signifies that the properties of an element itself have been modified. "),a("code",[t._v("has-*")]),t._v(" signifies that the content within an element has been modified.")]),t._v(" "),a("p",[t._v("For example, consider the difference between these two classes:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("is-stretched"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This div stretches to fill its parent"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("has-text-truncated"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This div has text that is truncated with an ellipsis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("If the properties of the element itself are affected, we use "),a("code",[t._v("is-*")]),t._v(". If the contents of that element have been affected, we use "),a("code",[t._v("has-*")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"media-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media-queries","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Media Queries")]),t._v(" "),a("p",[t._v("HiQ has fluid typography built in. Behind-the-scenes, we use two custom media queries that are defined using the "),a("a",{attrs:{href:"https://github.com/postcss/postcss-custom-media",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom media queries PostCSS plugin"),a("OutboundLink")],1),t._v(". If you are using your own PostCSS setup, we recommend using this plugin and defining your own media queries this way. This will make them easily reusable throughout your project.")]),t._v(" "),a("p",[t._v("Here are some example media queries:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@custom-media")]),t._v(" --mobile-only "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width < 35rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@custom-media")]),t._v(" --tablet "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width >= 35rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@custom-media")]),t._v(" --tablet-only "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width >= 35rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width < 54rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@custom-media")]),t._v(" --tablet-down "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width < 54rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@custom-media")]),t._v(" --desktop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width >= 54rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--tablet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--desktop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"z-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-index","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" z-index")]),t._v(" "),a("p",[a("code",[t._v("z-index")]),t._v(" values can quickly get out of hand, so we recommend setting them up as a system of custom properties.")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--zindex-dropdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--zindex-navbar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1010"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--zindex-modal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1020"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--zindex-tooltip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1030"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"animation-controls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-controls","aria-label":"Copy link to this section"}},[t._v("#")]),t._v(" Animation Controls")]),t._v(" "),a("p",[t._v("As part of your theme customizations, you can alter the details of how certain properties transition through "),a("code",[t._v("--hiq-speed")]),t._v(" and "),a("code",[t._v("--hiq-easing")]),t._v(". For example, these values affect the transition of button colors on "),a("code",[t._v("hover")]),t._v(".")]),t._v(" "),a("p",[t._v("You can use these values when creating your own transitions and animations, as well as defining your own. We recommend keeping these animation controls defined as custom properties for reuse:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--menu-easing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cubic-bezier")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("PropertiesTable",{attrs:{category:"animation-controls"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);