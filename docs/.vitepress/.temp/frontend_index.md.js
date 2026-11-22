import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/index.md
var __pageData = JSON.parse("{\"title\":\"FrontEnd Roadmap\",\"description\":\"Structured 3-chapter roadmap for HTML, CSS, and JavaScript.\",\"frontmatter\":{\"title\":\"FrontEnd Roadmap\",\"description\":\"Structured 3-chapter roadmap for HTML, CSS, and JavaScript.\"},\"headers\":[],\"relativePath\":\"frontend/index.md\",\"filePath\":\"frontend/index.md\"}");
var _sfc_main = { name: "frontend/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frontend-roadmap" tabindex="-1">FrontEnd Roadmap <a class="header-anchor" href="#frontend-roadmap" aria-label="Permalink to “FrontEnd Roadmap”">​</a></h1><p>Work through each track below or move between lessons using the <strong>Previous</strong> and <strong>Next</strong> chapter links at the bottom of each page.</p><h2 id="_1-html-3-chapters" tabindex="-1">1. HTML (3 Chapters) <a class="header-anchor" href="#_1-html-3-chapters" aria-label="Permalink to “1. HTML (3 Chapters)”">​</a></h2><ul><li><a href="./html/chapter1.html">Chapter 1: Document Structure &amp; Semantics</a></li><li><a href="./html/chapter2.html">Chapter 2: Forms, Tables &amp; Accessibility</a></li><li><a href="./html/chapter3.html">Chapter 3: Media, SEO &amp; Best Practices</a></li></ul><h2 id="_2-css-3-chapters" tabindex="-1">2. CSS (3 Chapters) <a class="header-anchor" href="#_2-css-3-chapters" aria-label="Permalink to “2. CSS (3 Chapters)”">​</a></h2><ul><li><a href="./css/chapter1.html">Chapter 1: Cascade, Specificity &amp; Box Model</a></li><li><a href="./css/chapter2.html">Chapter 2: Flexbox &amp; CSS Grid Layouts</a></li><li><a href="./css/chapter3.html">Chapter 3: Responsive Design, Variables &amp; Animations</a></li></ul><h2 id="_3-javascript-3-chapters" tabindex="-1">3. JavaScript (3 Chapters) <a class="header-anchor" href="#_3-javascript-3-chapters" aria-label="Permalink to “3. JavaScript (3 Chapters)”">​</a></h2><ul><li><a href="./javascript/chapter1.html">Chapter 1: Syntax, Types &amp; Control Flow</a></li><li><a href="./javascript/chapter2.html">Chapter 2: Functions, Arrays &amp; Objects</a></li><li><a href="./javascript/chapter3.html">Chapter 3: DOM Events, Fetch &amp; Async Patterns</a></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var frontend_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, frontend_default as default };
